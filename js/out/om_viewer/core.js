// Compiled by ClojureScript 0.0-2156
goog.provide('om_viewer.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('om.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('goog.events.EventType');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
om_viewer.core.ENTER_KEY = 13;
om_viewer.core.PROTOCOL = "https";
om_viewer.core.HOST = "stage.ona.io";
om_viewer.core.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
om_viewer.core.basic_authorization = (function basic_authorization(user,pass){return [cljs.core.str("Basic "),cljs.core.str(btoa([cljs.core.str(user),cljs.core.str(":"),cljs.core.str(pass)].join('')))].join('');
});
om_viewer.core.build_data_string = (function build_data_string(data){return clojure.string.join.call(null,(function (){var iter__4118__auto__ = (function iter__5562(s__5563){return (new cljs.core.LazySeq(null,(function (){var s__5563__$1 = s__5563;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5563__$1);if(temp__4092__auto__)
{var s__5563__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5563__$2))
{var c__4116__auto__ = cljs.core.chunk_first.call(null,s__5563__$2);var size__4117__auto__ = cljs.core.count.call(null,c__4116__auto__);var b__5565 = cljs.core.chunk_buffer.call(null,size__4117__auto__);if((function (){var i__5564 = 0;while(true){
if((i__5564 < size__4117__auto__))
{var vec__5568 = cljs.core._nth.call(null,c__4116__auto__,i__5564);var k = cljs.core.nth.call(null,vec__5568,0,null);var v = cljs.core.nth.call(null,vec__5568,1,null);cljs.core.chunk_append.call(null,b__5565,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(v)].join(''));
{
var G__5570 = (i__5564 + 1);
i__5564 = G__5570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5565),iter__5562.call(null,cljs.core.chunk_rest.call(null,s__5563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5565),null);
}
} else
{var vec__5569 = cljs.core.first.call(null,s__5563__$2);var k = cljs.core.nth.call(null,vec__5569,0,null);var v = cljs.core.nth.call(null,vec__5569,1,null);return cljs.core.cons.call(null,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(v)].join(''),iter__5562.call(null,cljs.core.rest.call(null,s__5563__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4118__auto__.call(null,data);
})());
});
om_viewer.core.json_xhr = (function json_xhr(p__5571){var map__5574 = p__5571;var map__5574__$1 = ((cljs.core.seq_QMARK_.call(null,map__5574))?cljs.core.apply.call(null,cljs.core.hash_map,map__5574):map__5574);var on_complete = cljs.core.get.call(null,map__5574__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__5574__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__5574__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__5574__$1,new cljs.core.Keyword(null,"method","method",4231316563));var account = cljs.core.get.call(null,map__5574__$1,new cljs.core.Keyword(null,"account","account",4131552671));var xhr = (new goog.net.XhrIo());var url__$1 = [cljs.core.str(om_viewer.core.PROTOCOL),cljs.core.str("://"),cljs.core.str(om_viewer.core.HOST),cljs.core.str("/api/v1/"),cljs.core.str(url)].join('');var map__5575 = account;var map__5575__$1 = ((cljs.core.seq_QMARK_.call(null,map__5575))?cljs.core.apply.call(null,cljs.core.hash_map,map__5575):map__5575);var password = cljs.core.get.call(null,map__5575__$1,new cljs.core.Keyword(null,"password","password",2230889997));var username = cljs.core.get.call(null,map__5575__$1,new cljs.core.Keyword(null,"username","username",748190792));goog.events.listen(xhr,goog.net.EventType.COMPLETE,(function (e){return on_complete.call(null,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,JSON.parse.call(null,xhr.getResponseText()))));
}));
return xhr.send(url__$1,om_viewer.core.meths.call(null,method),(cljs.core.truth_(data)?om_viewer.core.build_data_string.call(null,data):null),{"Content-Type": "application/x-www-form-urlencoded", "Authorization": om_viewer.core.basic_authorization.call(null,username,password)});
});
om_viewer.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datasets","datasets",2803879533),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"account","account",4131552671),cljs.core.PersistentArrayMap.EMPTY], null));
om_viewer.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
om_viewer.core.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
om_viewer.core.end_edit = (function end_edit(text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
return cb.call(null,text);
});
om_viewer.core.on_edit = (function on_edit(account,id,description){return om_viewer.core.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"account","account",4131552671),account,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),[cljs.core.str("forms/"),cljs.core.str(new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(account)),cljs.core.str("/"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",3584325486),description], null),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){return cljs.core.println.call(null,"server response:",res);
})], null));
});
om_viewer.core.editable = (function editable(data,owner,p__5578){var map__5585 = p__5578;var map__5585__$1 = ((cljs.core.seq_QMARK_.call(null,map__5585))?cljs.core.apply.call(null,cljs.core.hash_map,map__5585):map__5585);var opts = map__5585__$1;var on_edit = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"on-edit","on-edit",3936438442));var edit_key = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"edit-key","edit-key",2614779790));if(typeof om_viewer.core.t5586 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_viewer.core.t5586 = (function (edit_key,on_edit,opts,map__5585,p__5578,owner,data,editable,meta5587){
this.edit_key = edit_key;
this.on_edit = on_edit;
this.opts = opts;
this.map__5585 = map__5585;
this.p__5578 = p__5578;
this.owner = owner;
this.data = data;
this.editable = editable;
this.meta5587 = meta5587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_viewer.core.t5586.cljs$lang$type = true;
om_viewer.core.t5586.cljs$lang$ctorStr = "om-viewer.core/t5586";
om_viewer.core.t5586.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"om-viewer.core/t5586");
});
om_viewer.core.t5586.prototype.om$core$IRenderState$ = true;
om_viewer.core.t5586.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__5589){var self__ = this;
var map__5590 = p__5589;var map__5590__$1 = ((cljs.core.seq_QMARK_.call(null,map__5590))?cljs.core.apply.call(null,cljs.core.hash_map,map__5590):map__5590);var editing = cljs.core.get.call(null,map__5590__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var edit_text = cljs.core.get.call(null,map__5590__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var ___$1 = this;var title = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"title","title",1124275658));var description = cljs.core.get.call(null,self__.data,self__.edit_key);return React.DOM.li(null,React.DOM.span(null,title),React.DOM.ul(null,React.DOM.li(null,React.DOM.span(null,"Description: "),React.DOM.span({"style": om_viewer.core.display.call(null,cljs.core.not.call(null,editing))},description),om.dom.input.call(null,{"onBlur": (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return om_viewer.core.end_edit.call(null,description,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onKeyPress": (function (p1__5577_SHARP_){if(cljs.core.truth_((function (){var and__3389__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__3389__auto__))
{return (p1__5577_SHARP_.keyCode === om_viewer.core.ENTER_KEY);
} else
{return and__3389__auto__;
}
})()))
{return om_viewer.core.end_edit.call(null,description,self__.owner,self__.on_edit);
} else
{return null;
}
}), "onChange": (function (p1__5576_SHARP_){return om_viewer.core.handle_change.call(null,p1__5576_SHARP_,self__.data,self__.edit_key,self__.owner);
}), "value": description, "style": om_viewer.core.display.call(null,editing)}),React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
}), "style": om_viewer.core.display.call(null,cljs.core.not.call(null,editing))},"Edit"))));
});
om_viewer.core.t5586.prototype.om$core$IInitState$ = true;
om_viewer.core.t5586.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
om_viewer.core.t5586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5588){var self__ = this;
var _5588__$1 = this;return self__.meta5587;
});
om_viewer.core.t5586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5588,meta5587__$1){var self__ = this;
var _5588__$1 = this;return (new om_viewer.core.t5586(self__.edit_key,self__.on_edit,self__.opts,self__.map__5585,self__.p__5578,self__.owner,self__.data,self__.editable,meta5587__$1));
});
om_viewer.core.__GT_t5586 = (function __GT_t5586(edit_key__$1,on_edit__$1,opts__$1,map__5585__$2,p__5578__$1,owner__$1,data__$1,editable__$1,meta5587){return (new om_viewer.core.t5586(edit_key__$1,on_edit__$1,opts__$1,map__5585__$2,p__5578__$1,owner__$1,data__$1,editable__$1,meta5587));
});
}
return (new om_viewer.core.t5586(edit_key,on_edit,opts,map__5585__$1,p__5578,owner,data,editable,null));
});
om_viewer.core.load_datasets = (function load_datasets(app,account){if(cljs.core.truth_(new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(account)))
{return om_viewer.core.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"account","account",4131552671),account,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"forms",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__5591_SHARP_){return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"datasets","datasets",2803879533),(function (_){return p1__5591_SHARP_;
}));
})], null));
} else
{return null;
}
});
om_viewer.core.login = (function login(app,owner){var username = om.core.get_node.call(null,owner,"login-username").value;var password = om.core.get_node.call(null,owner,"login-password").value;var account = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",748190792),username,new cljs.core.Keyword(null,"password","password",2230889997),password], null);if(cljs.core.truth_((function (){var and__3389__auto__ = username;if(cljs.core.truth_(and__3389__auto__))
{return password;
} else
{return and__3389__auto__;
}
})()))
{om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",4131552671)], null),account);
} else
{}
return om_viewer.core.load_datasets.call(null,app,account);
});
om_viewer.core.dataset_view = (function dataset_view(app,owner){if(typeof om_viewer.core.t5597 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_viewer.core.t5597 = (function (owner,app,dataset_view,meta5598){
this.owner = owner;
this.app = app;
this.dataset_view = dataset_view;
this.meta5598 = meta5598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_viewer.core.t5597.cljs$lang$type = true;
om_viewer.core.t5597.cljs$lang$ctorStr = "om-viewer.core/t5597";
om_viewer.core.t5597.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"om-viewer.core/t5597");
});
om_viewer.core.t5597.prototype.om$core$IRender$ = true;
om_viewer.core.t5597.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.h2(null,"Login"),React.DOM.form({"action": "#"},om.dom.input.call(null,{"ref": "login-username", "type": "text"}),om.dom.input.call(null,{"ref": "login-password", "type": "text"}),React.DOM.button({"onClick": (function (){return om_viewer.core.login.call(null,self__.app,self__.owner);
})},"Sign in"))),React.DOM.div({"id": "classes"},(function (){var datasets = new cljs.core.Keyword(null,"datasets","datasets",2803879533).cljs$core$IFn$_invoke$arity$1(self__.app);var map__5600 = new cljs.core.Keyword(null,"account","account",4131552671).cljs$core$IFn$_invoke$arity$1(self__.app);var map__5600__$1 = ((cljs.core.seq_QMARK_.call(null,map__5600))?cljs.core.apply.call(null,cljs.core.hash_map,map__5600):map__5600);var password = cljs.core.get.call(null,map__5600__$1,new cljs.core.Keyword(null,"password","password",2230889997));var username = cljs.core.get.call(null,map__5600__$1,new cljs.core.Keyword(null,"username","username",748190792));if((cljs.core.count.call(null,datasets) > 0))
{React.DOM.h2(null,"Datasets");
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (dataset){var id = new cljs.core.Keyword(null,"formid","formid",4040092753).cljs$core$IFn$_invoke$arity$1(dataset);return om.core.build.call(null,om_viewer.core.editable,dataset,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-key","edit-key",2614779790),new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"on-edit","on-edit",3936438442),(function (p1__5592_SHARP_){return om_viewer.core.on_edit.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",748190792),username,new cljs.core.Keyword(null,"password","password",2230889997),password], null),id,p1__5592_SHARP_);
})], null)], null));
}),new cljs.core.Keyword(null,"datasets","datasets",2803879533).cljs$core$IFn$_invoke$arity$1(self__.app)));
} else
{return null;
}
})()));
});
om_viewer.core.t5597.prototype.om$core$IWillMount$ = true;
om_viewer.core.t5597.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om_viewer.core.load_datasets.call(null,self__.app,new cljs.core.Keyword(null,"account","account",4131552671).cljs$core$IFn$_invoke$arity$1(self__.app));
});
om_viewer.core.t5597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5599){var self__ = this;
var _5599__$1 = this;return self__.meta5598;
});
om_viewer.core.t5597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5599,meta5598__$1){var self__ = this;
var _5599__$1 = this;return (new om_viewer.core.t5597(self__.owner,self__.app,self__.dataset_view,meta5598__$1));
});
om_viewer.core.__GT_t5597 = (function __GT_t5597(owner__$1,app__$1,dataset_view__$1,meta5598){return (new om_viewer.core.t5597(owner__$1,app__$1,dataset_view__$1,meta5598));
});
}
return (new om_viewer.core.t5597(owner,app,dataset_view,null));
});
om.core.root.call(null,om_viewer.core.dataset_view,om_viewer.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("classes")], null));

//# sourceMappingURL=core.js.map