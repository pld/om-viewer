(ns om-viewer.core
  (:require [cljs.reader :as reader]
            [clojure.string :as s]
            [goog.events :as events]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType])
  (:use [clojure.walk :only [keywordize-keys]]))

(enable-console-print!)

(def ENTER_KEY 13)

(def PROTOCOL "https")

(def HOST "stage.ona.io")

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn basic-authorization [user pass]
  (str "Basic " (js/btoa (str user ":" pass))))

(defn build-data-string [data]
  (s/join (for [[k v] data] (str (name k) "=" v))))

(defn json-xhr [{:keys [account method url data on-complete]}]
  (let [xhr (XhrIo.)
        url (str PROTOCOL "://" HOST "/api/v1/" url)
        {:keys [username password]} account]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]
                     (on-complete (-> xhr .getResponseText JSON/parse js->clj keywordize-keys))))
    (. xhr
       (send url (meths method) (when data (build-data-string data))
             #js {"Authorization" (basic-authorization username password)
                  "Content-Type" "application/x-www-form-urlencoded"}))))

(def app-state
  (atom {:datasets [] :account {}}))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn end-edit [text owner cb]
  (om/set-state! owner :editing false)
  (cb text))

(defn on-edit [account id description]
  (json-xhr
   {:account account
    :method :put
    :url (str "forms/" (:username account) "/" id)
    :data {:description description}
    :on-complete
    (fn [res]
      (println "server response:" res))}))

(defn editable [data owner {:keys [edit-key on-edit] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state [_ {:keys [edit-text editing]}]
      (let [title (get data :title)
            description (get data edit-key)]
        (dom/li nil
                (dom/span nil title)
                (dom/ul nil
                        (dom/li nil
                                (dom/span nil "Description: ")
                                (dom/span #js {:style (display (not editing))}
                                          description)
                                (dom/input
                                 #js {:style (display editing)
                                      :value description
                                      :onChange #(handle-change % data edit-key owner)
                                      :onKeyPress #(when (and (om/get-state owner :editing)
                                                              (== (.-keyCode %) ENTER_KEY))
                                                     (end-edit description owner on-edit))
                                      :onBlur (fn [e]
                                                (when (om/get-state owner :editing)
                                                  (end-edit description owner on-edit)))})
                                (dom/button
                                 #js {:style (display (not editing))
                                      :onClick #(om/set-state! owner :editing true)}
                                 "Edit"))))))))

(defn load-datasets [app account]
  (when (:username account)
    (json-xhr {:account account
               :method :get
               :url "forms"
               :on-complete #(om/transact! app :datasets (fn [_] %))})))

(defn login [app owner]
  (let [username (-> (om/get-node owner "login-username") .-value)
        password (-> (om/get-node owner "login-password") .-value)
        account {:username username :password password}]
     (when (and username password)
       (om/update! app [:account] account))
     (load-datasets app account)))

(defn dataset-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (load-datasets app (:account app)))
    om/IRender
    (render [_]
      (dom/div nil
               (dom/div nil
                        (dom/h2 nil "Login")
                        (dom/form #js {:action "#"}
                                 (dom/input #js {:type "text" :ref "login-username"})
                                 (dom/input #js {:type "text" :ref "login-password"})
                                 (dom/button #js
                                             {:onClick #(login app owner)}
                                             "Sign in")))
               (dom/div #js {:id "classes"}
                        (let [datasets (:datasets app)
                              account (:account app)]
                          (when (> (count datasets) 0)
                            (dom/h2 nil "Datasets")
                            (apply dom/ul nil
                                   (map
                                    (fn [dataset]
                                      (let [id (:formid dataset)]
                                        (om/build editable dataset
                                                  {:opts {:edit-key :description
                                                          :on-edit #(on-edit account id %)}})))
                                    (:datasets app))))))))))

(om/root dataset-view app-state
         {:target (gdom/getElement "classes")})
