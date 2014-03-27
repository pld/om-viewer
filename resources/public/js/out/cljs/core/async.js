// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9235 = (function (f,fn_handler,meta9236){
this.f = f;
this.fn_handler = fn_handler;
this.meta9236 = meta9236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9235.cljs$lang$type = true;
cljs.core.async.t9235.cljs$lang$ctorStr = "cljs.core.async/t9235";
cljs.core.async.t9235.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9235");
});
cljs.core.async.t9235.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9237){var self__ = this;
var _9237__$1 = this;return self__.meta9236;
});
cljs.core.async.t9235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9237,meta9236__$1){var self__ = this;
var _9237__$1 = this;return (new cljs.core.async.t9235(self__.f,self__.fn_handler,meta9236__$1));
});
cljs.core.async.__GT_t9235 = (function __GT_t9235(f__$1,fn_handler__$1,meta9236){return (new cljs.core.async.t9235(f__$1,fn_handler__$1,meta9236));
});
}
return (new cljs.core.async.t9235(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9239 = buff;if(G__9239)
{var bit__4051__auto__ = null;if(cljs.core.truth_((function (){var or__3401__auto__ = bit__4051__auto__;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return G__9239.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9239.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9239);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9239);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9240 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9240);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9240);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3389__auto__ = ret;if(cljs.core.truth_(and__3389__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3389__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4249__auto___9241 = n;var x_9242 = 0;while(true){
if((x_9242 < n__4249__auto___9241))
{(a[x_9242] = 0);
{
var G__9243 = (x_9242 + 1);
x_9242 = G__9243;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9244 = (i + 1);
i = G__9244;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9248 = (function (flag,alt_flag,meta9249){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9249 = meta9249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9248.cljs$lang$type = true;
cljs.core.async.t9248.cljs$lang$ctorStr = "cljs.core.async/t9248";
cljs.core.async.t9248.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9248");
});
cljs.core.async.t9248.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9250){var self__ = this;
var _9250__$1 = this;return self__.meta9249;
});
cljs.core.async.t9248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9250,meta9249__$1){var self__ = this;
var _9250__$1 = this;return (new cljs.core.async.t9248(self__.flag,self__.alt_flag,meta9249__$1));
});
cljs.core.async.__GT_t9248 = (function __GT_t9248(flag__$1,alt_flag__$1,meta9249){return (new cljs.core.async.t9248(flag__$1,alt_flag__$1,meta9249));
});
}
return (new cljs.core.async.t9248(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9254 = (function (cb,flag,alt_handler,meta9255){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9255 = meta9255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9254.cljs$lang$type = true;
cljs.core.async.t9254.cljs$lang$ctorStr = "cljs.core.async/t9254";
cljs.core.async.t9254.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9254");
});
cljs.core.async.t9254.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9256){var self__ = this;
var _9256__$1 = this;return self__.meta9255;
});
cljs.core.async.t9254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9256,meta9255__$1){var self__ = this;
var _9256__$1 = this;return (new cljs.core.async.t9254(self__.cb,self__.flag,self__.alt_handler,meta9255__$1));
});
cljs.core.async.__GT_t9254 = (function __GT_t9254(cb__$1,flag__$1,alt_handler__$1,meta9255){return (new cljs.core.async.t9254(cb__$1,flag__$1,alt_handler__$1,meta9255));
});
}
return (new cljs.core.async.t9254(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9257_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9257_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3401__auto__ = wport;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9258 = (i + 1);
i = G__9258;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3401__auto__ = ret;if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3389__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3389__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3389__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9259){var map__9261 = p__9259;var map__9261__$1 = ((cljs.core.seq_QMARK_.call(null,map__9261))?cljs.core.apply.call(null,cljs.core.hash_map,map__9261):map__9261);var opts = map__9261__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9259 = null;if (arguments.length > 1) {
  p__9259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9259);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9262){
var ports = cljs.core.first(arglist__9262);
var p__9259 = cljs.core.rest(arglist__9262);
return alts_BANG___delegate(ports,p__9259);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9270 = (function (ch,f,map_LT_,meta9271){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9271 = meta9271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9270.cljs$lang$type = true;
cljs.core.async.t9270.cljs$lang$ctorStr = "cljs.core.async/t9270";
cljs.core.async.t9270.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9270");
});
cljs.core.async.t9270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9273 = (function (fn1,_,meta9271,ch,f,map_LT_,meta9274){
this.fn1 = fn1;
this._ = _;
this.meta9271 = meta9271;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9274 = meta9274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9273.cljs$lang$type = true;
cljs.core.async.t9273.cljs$lang$ctorStr = "cljs.core.async/t9273";
cljs.core.async.t9273.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9273");
});
cljs.core.async.t9273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9273.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9263_SHARP_){return f1.call(null,(((p1__9263_SHARP_ == null))?null:self__.f.call(null,p1__9263_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9275){var self__ = this;
var _9275__$1 = this;return self__.meta9274;
});
cljs.core.async.t9273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9275,meta9274__$1){var self__ = this;
var _9275__$1 = this;return (new cljs.core.async.t9273(self__.fn1,self__._,self__.meta9271,self__.ch,self__.f,self__.map_LT_,meta9274__$1));
});
cljs.core.async.__GT_t9273 = (function __GT_t9273(fn1__$1,___$2,meta9271__$1,ch__$2,f__$2,map_LT___$2,meta9274){return (new cljs.core.async.t9273(fn1__$1,___$2,meta9271__$1,ch__$2,f__$2,map_LT___$2,meta9274));
});
}
return (new cljs.core.async.t9273(fn1,___$1,self__.meta9271,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3389__auto__ = ret;if(cljs.core.truth_(and__3389__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3389__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9270.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9272){var self__ = this;
var _9272__$1 = this;return self__.meta9271;
});
cljs.core.async.t9270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9272,meta9271__$1){var self__ = this;
var _9272__$1 = this;return (new cljs.core.async.t9270(self__.ch,self__.f,self__.map_LT_,meta9271__$1));
});
cljs.core.async.__GT_t9270 = (function __GT_t9270(ch__$1,f__$1,map_LT___$1,meta9271){return (new cljs.core.async.t9270(ch__$1,f__$1,map_LT___$1,meta9271));
});
}
return (new cljs.core.async.t9270(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9279 = (function (ch,f,map_GT_,meta9280){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9280 = meta9280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9279.cljs$lang$type = true;
cljs.core.async.t9279.cljs$lang$ctorStr = "cljs.core.async/t9279";
cljs.core.async.t9279.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9279");
});
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9281){var self__ = this;
var _9281__$1 = this;return self__.meta9280;
});
cljs.core.async.t9279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9281,meta9280__$1){var self__ = this;
var _9281__$1 = this;return (new cljs.core.async.t9279(self__.ch,self__.f,self__.map_GT_,meta9280__$1));
});
cljs.core.async.__GT_t9279 = (function __GT_t9279(ch__$1,f__$1,map_GT___$1,meta9280){return (new cljs.core.async.t9279(ch__$1,f__$1,map_GT___$1,meta9280));
});
}
return (new cljs.core.async.t9279(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9285 = (function (ch,p,filter_GT_,meta9286){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9286 = meta9286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9285.cljs$lang$type = true;
cljs.core.async.t9285.cljs$lang$ctorStr = "cljs.core.async/t9285";
cljs.core.async.t9285.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9285");
});
cljs.core.async.t9285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9285.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9287){var self__ = this;
var _9287__$1 = this;return self__.meta9286;
});
cljs.core.async.t9285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9287,meta9286__$1){var self__ = this;
var _9287__$1 = this;return (new cljs.core.async.t9285(self__.ch,self__.p,self__.filter_GT_,meta9286__$1));
});
cljs.core.async.__GT_t9285 = (function __GT_t9285(ch__$1,p__$1,filter_GT___$1,meta9286){return (new cljs.core.async.t9285(ch__$1,p__$1,filter_GT___$1,meta9286));
});
}
return (new cljs.core.async.t9285(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6892__auto___9370 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_9349){var state_val_9350 = (state_9349[1]);if((state_val_9350 === 1))
{var state_9349__$1 = state_9349;var statearr_9351_9371 = state_9349__$1;(statearr_9351_9371[2] = null);
(statearr_9351_9371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9350 === 2))
{var state_9349__$1 = state_9349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9349__$1,4,ch);
} else
{if((state_val_9350 === 3))
{var inst_9347 = (state_9349[2]);var state_9349__$1 = state_9349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9349__$1,inst_9347);
} else
{if((state_val_9350 === 4))
{var inst_9331 = (state_9349[7]);var inst_9331__$1 = (state_9349[2]);var inst_9332 = (inst_9331__$1 == null);var state_9349__$1 = (function (){var statearr_9352 = state_9349;(statearr_9352[7] = inst_9331__$1);
return statearr_9352;
})();if(cljs.core.truth_(inst_9332))
{var statearr_9353_9372 = state_9349__$1;(statearr_9353_9372[1] = 5);
} else
{var statearr_9354_9373 = state_9349__$1;(statearr_9354_9373[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9350 === 5))
{var inst_9334 = cljs.core.async.close_BANG_.call(null,out);var state_9349__$1 = state_9349;var statearr_9355_9374 = state_9349__$1;(statearr_9355_9374[2] = inst_9334);
(statearr_9355_9374[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9350 === 6))
{var inst_9331 = (state_9349[7]);var inst_9336 = p.call(null,inst_9331);var state_9349__$1 = state_9349;if(cljs.core.truth_(inst_9336))
{var statearr_9356_9375 = state_9349__$1;(statearr_9356_9375[1] = 8);
} else
{var statearr_9357_9376 = state_9349__$1;(statearr_9357_9376[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9350 === 7))
{var inst_9345 = (state_9349[2]);var state_9349__$1 = state_9349;var statearr_9358_9377 = state_9349__$1;(statearr_9358_9377[2] = inst_9345);
(statearr_9358_9377[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9350 === 8))
{var inst_9331 = (state_9349[7]);var state_9349__$1 = state_9349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9349__$1,11,out,inst_9331);
} else
{if((state_val_9350 === 9))
{var state_9349__$1 = state_9349;var statearr_9359_9378 = state_9349__$1;(statearr_9359_9378[2] = null);
(statearr_9359_9378[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9350 === 10))
{var inst_9342 = (state_9349[2]);var state_9349__$1 = (function (){var statearr_9360 = state_9349;(statearr_9360[8] = inst_9342);
return statearr_9360;
})();var statearr_9361_9379 = state_9349__$1;(statearr_9361_9379[2] = null);
(statearr_9361_9379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9350 === 11))
{var inst_9339 = (state_9349[2]);var state_9349__$1 = state_9349;var statearr_9362_9380 = state_9349__$1;(statearr_9362_9380[2] = inst_9339);
(statearr_9362_9380[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_9366 = [null,null,null,null,null,null,null,null,null];(statearr_9366[0] = state_machine__6823__auto__);
(statearr_9366[1] = 1);
return statearr_9366;
});
var state_machine__6823__auto____1 = (function (state_9349){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_9349);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e9367){if((e9367 instanceof Object))
{var ex__6826__auto__ = e9367;var statearr_9368_9381 = state_9349;(statearr_9368_9381[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9382 = state_9349;
state_9349 = G__9382;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_9349){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_9349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_9369 = f__6893__auto__.call(null);(statearr_9369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___9370);
return statearr_9369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6892__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_9534){var state_val_9535 = (state_9534[1]);if((state_val_9535 === 1))
{var state_9534__$1 = state_9534;var statearr_9536_9573 = state_9534__$1;(statearr_9536_9573[2] = null);
(statearr_9536_9573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 2))
{var state_9534__$1 = state_9534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9534__$1,4,in$);
} else
{if((state_val_9535 === 3))
{var inst_9532 = (state_9534[2]);var state_9534__$1 = state_9534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9534__$1,inst_9532);
} else
{if((state_val_9535 === 4))
{var inst_9480 = (state_9534[7]);var inst_9480__$1 = (state_9534[2]);var inst_9481 = (inst_9480__$1 == null);var state_9534__$1 = (function (){var statearr_9537 = state_9534;(statearr_9537[7] = inst_9480__$1);
return statearr_9537;
})();if(cljs.core.truth_(inst_9481))
{var statearr_9538_9574 = state_9534__$1;(statearr_9538_9574[1] = 5);
} else
{var statearr_9539_9575 = state_9534__$1;(statearr_9539_9575[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 5))
{var inst_9483 = cljs.core.async.close_BANG_.call(null,out);var state_9534__$1 = state_9534;var statearr_9540_9576 = state_9534__$1;(statearr_9540_9576[2] = inst_9483);
(statearr_9540_9576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 6))
{var inst_9480 = (state_9534[7]);var inst_9485 = f.call(null,inst_9480);var inst_9490 = cljs.core.seq.call(null,inst_9485);var inst_9491 = inst_9490;var inst_9492 = null;var inst_9493 = 0;var inst_9494 = 0;var state_9534__$1 = (function (){var statearr_9541 = state_9534;(statearr_9541[8] = inst_9491);
(statearr_9541[9] = inst_9492);
(statearr_9541[10] = inst_9493);
(statearr_9541[11] = inst_9494);
return statearr_9541;
})();var statearr_9542_9577 = state_9534__$1;(statearr_9542_9577[2] = null);
(statearr_9542_9577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 7))
{var inst_9530 = (state_9534[2]);var state_9534__$1 = state_9534;var statearr_9543_9578 = state_9534__$1;(statearr_9543_9578[2] = inst_9530);
(statearr_9543_9578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 8))
{var inst_9493 = (state_9534[10]);var inst_9494 = (state_9534[11]);var inst_9496 = (inst_9494 < inst_9493);var inst_9497 = inst_9496;var state_9534__$1 = state_9534;if(cljs.core.truth_(inst_9497))
{var statearr_9544_9579 = state_9534__$1;(statearr_9544_9579[1] = 10);
} else
{var statearr_9545_9580 = state_9534__$1;(statearr_9545_9580[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 9))
{var inst_9527 = (state_9534[2]);var state_9534__$1 = (function (){var statearr_9546 = state_9534;(statearr_9546[12] = inst_9527);
return statearr_9546;
})();var statearr_9547_9581 = state_9534__$1;(statearr_9547_9581[2] = null);
(statearr_9547_9581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 10))
{var inst_9492 = (state_9534[9]);var inst_9494 = (state_9534[11]);var inst_9499 = cljs.core._nth.call(null,inst_9492,inst_9494);var state_9534__$1 = state_9534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9534__$1,13,out,inst_9499);
} else
{if((state_val_9535 === 11))
{var inst_9491 = (state_9534[8]);var inst_9505 = (state_9534[13]);var inst_9505__$1 = cljs.core.seq.call(null,inst_9491);var state_9534__$1 = (function (){var statearr_9551 = state_9534;(statearr_9551[13] = inst_9505__$1);
return statearr_9551;
})();if(inst_9505__$1)
{var statearr_9552_9582 = state_9534__$1;(statearr_9552_9582[1] = 14);
} else
{var statearr_9553_9583 = state_9534__$1;(statearr_9553_9583[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 12))
{var inst_9525 = (state_9534[2]);var state_9534__$1 = state_9534;var statearr_9554_9584 = state_9534__$1;(statearr_9554_9584[2] = inst_9525);
(statearr_9554_9584[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 13))
{var inst_9491 = (state_9534[8]);var inst_9492 = (state_9534[9]);var inst_9493 = (state_9534[10]);var inst_9494 = (state_9534[11]);var inst_9501 = (state_9534[2]);var inst_9502 = (inst_9494 + 1);var tmp9548 = inst_9491;var tmp9549 = inst_9492;var tmp9550 = inst_9493;var inst_9491__$1 = tmp9548;var inst_9492__$1 = tmp9549;var inst_9493__$1 = tmp9550;var inst_9494__$1 = inst_9502;var state_9534__$1 = (function (){var statearr_9555 = state_9534;(statearr_9555[14] = inst_9501);
(statearr_9555[8] = inst_9491__$1);
(statearr_9555[9] = inst_9492__$1);
(statearr_9555[10] = inst_9493__$1);
(statearr_9555[11] = inst_9494__$1);
return statearr_9555;
})();var statearr_9556_9585 = state_9534__$1;(statearr_9556_9585[2] = null);
(statearr_9556_9585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 14))
{var inst_9505 = (state_9534[13]);var inst_9507 = cljs.core.chunked_seq_QMARK_.call(null,inst_9505);var state_9534__$1 = state_9534;if(inst_9507)
{var statearr_9557_9586 = state_9534__$1;(statearr_9557_9586[1] = 17);
} else
{var statearr_9558_9587 = state_9534__$1;(statearr_9558_9587[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 15))
{var state_9534__$1 = state_9534;var statearr_9559_9588 = state_9534__$1;(statearr_9559_9588[2] = null);
(statearr_9559_9588[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 16))
{var inst_9523 = (state_9534[2]);var state_9534__$1 = state_9534;var statearr_9560_9589 = state_9534__$1;(statearr_9560_9589[2] = inst_9523);
(statearr_9560_9589[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 17))
{var inst_9505 = (state_9534[13]);var inst_9509 = cljs.core.chunk_first.call(null,inst_9505);var inst_9510 = cljs.core.chunk_rest.call(null,inst_9505);var inst_9511 = cljs.core.count.call(null,inst_9509);var inst_9491 = inst_9510;var inst_9492 = inst_9509;var inst_9493 = inst_9511;var inst_9494 = 0;var state_9534__$1 = (function (){var statearr_9561 = state_9534;(statearr_9561[8] = inst_9491);
(statearr_9561[9] = inst_9492);
(statearr_9561[10] = inst_9493);
(statearr_9561[11] = inst_9494);
return statearr_9561;
})();var statearr_9562_9590 = state_9534__$1;(statearr_9562_9590[2] = null);
(statearr_9562_9590[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 18))
{var inst_9505 = (state_9534[13]);var inst_9514 = cljs.core.first.call(null,inst_9505);var state_9534__$1 = state_9534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9534__$1,20,out,inst_9514);
} else
{if((state_val_9535 === 19))
{var inst_9520 = (state_9534[2]);var state_9534__$1 = state_9534;var statearr_9563_9591 = state_9534__$1;(statearr_9563_9591[2] = inst_9520);
(statearr_9563_9591[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9535 === 20))
{var inst_9505 = (state_9534[13]);var inst_9516 = (state_9534[2]);var inst_9517 = cljs.core.next.call(null,inst_9505);var inst_9491 = inst_9517;var inst_9492 = null;var inst_9493 = 0;var inst_9494 = 0;var state_9534__$1 = (function (){var statearr_9564 = state_9534;(statearr_9564[8] = inst_9491);
(statearr_9564[9] = inst_9492);
(statearr_9564[10] = inst_9493);
(statearr_9564[11] = inst_9494);
(statearr_9564[15] = inst_9516);
return statearr_9564;
})();var statearr_9565_9592 = state_9534__$1;(statearr_9565_9592[2] = null);
(statearr_9565_9592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_9569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9569[0] = state_machine__6823__auto__);
(statearr_9569[1] = 1);
return statearr_9569;
});
var state_machine__6823__auto____1 = (function (state_9534){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_9534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e9570){if((e9570 instanceof Object))
{var ex__6826__auto__ = e9570;var statearr_9571_9593 = state_9534;(statearr_9571_9593[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9534);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9594 = state_9534;
state_9534 = G__9594;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_9534){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_9534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_9572 = f__6893__auto__.call(null);(statearr_9572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto__);
return statearr_9572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return c__6892__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6892__auto___9675 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_9654){var state_val_9655 = (state_9654[1]);if((state_val_9655 === 1))
{var state_9654__$1 = state_9654;var statearr_9656_9676 = state_9654__$1;(statearr_9656_9676[2] = null);
(statearr_9656_9676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9655 === 2))
{var state_9654__$1 = state_9654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9654__$1,4,from);
} else
{if((state_val_9655 === 3))
{var inst_9652 = (state_9654[2]);var state_9654__$1 = state_9654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9654__$1,inst_9652);
} else
{if((state_val_9655 === 4))
{var inst_9637 = (state_9654[7]);var inst_9637__$1 = (state_9654[2]);var inst_9638 = (inst_9637__$1 == null);var state_9654__$1 = (function (){var statearr_9657 = state_9654;(statearr_9657[7] = inst_9637__$1);
return statearr_9657;
})();if(cljs.core.truth_(inst_9638))
{var statearr_9658_9677 = state_9654__$1;(statearr_9658_9677[1] = 5);
} else
{var statearr_9659_9678 = state_9654__$1;(statearr_9659_9678[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9655 === 5))
{var state_9654__$1 = state_9654;if(cljs.core.truth_(close_QMARK_))
{var statearr_9660_9679 = state_9654__$1;(statearr_9660_9679[1] = 8);
} else
{var statearr_9661_9680 = state_9654__$1;(statearr_9661_9680[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9655 === 6))
{var inst_9637 = (state_9654[7]);var state_9654__$1 = state_9654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9654__$1,11,to,inst_9637);
} else
{if((state_val_9655 === 7))
{var inst_9650 = (state_9654[2]);var state_9654__$1 = state_9654;var statearr_9662_9681 = state_9654__$1;(statearr_9662_9681[2] = inst_9650);
(statearr_9662_9681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9655 === 8))
{var inst_9641 = cljs.core.async.close_BANG_.call(null,to);var state_9654__$1 = state_9654;var statearr_9663_9682 = state_9654__$1;(statearr_9663_9682[2] = inst_9641);
(statearr_9663_9682[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9655 === 9))
{var state_9654__$1 = state_9654;var statearr_9664_9683 = state_9654__$1;(statearr_9664_9683[2] = null);
(statearr_9664_9683[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9655 === 10))
{var inst_9644 = (state_9654[2]);var state_9654__$1 = state_9654;var statearr_9665_9684 = state_9654__$1;(statearr_9665_9684[2] = inst_9644);
(statearr_9665_9684[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9655 === 11))
{var inst_9647 = (state_9654[2]);var state_9654__$1 = (function (){var statearr_9666 = state_9654;(statearr_9666[8] = inst_9647);
return statearr_9666;
})();var statearr_9667_9685 = state_9654__$1;(statearr_9667_9685[2] = null);
(statearr_9667_9685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_9671 = [null,null,null,null,null,null,null,null,null];(statearr_9671[0] = state_machine__6823__auto__);
(statearr_9671[1] = 1);
return statearr_9671;
});
var state_machine__6823__auto____1 = (function (state_9654){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_9654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e9672){if((e9672 instanceof Object))
{var ex__6826__auto__ = e9672;var statearr_9673_9686 = state_9654;(statearr_9673_9686[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9687 = state_9654;
state_9654 = G__9687;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_9654){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_9654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_9674 = f__6893__auto__.call(null);(statearr_9674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___9675);
return statearr_9674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6892__auto___9774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_9752){var state_val_9753 = (state_9752[1]);if((state_val_9753 === 1))
{var state_9752__$1 = state_9752;var statearr_9754_9775 = state_9752__$1;(statearr_9754_9775[2] = null);
(statearr_9754_9775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 2))
{var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9752__$1,4,ch);
} else
{if((state_val_9753 === 3))
{var inst_9750 = (state_9752[2]);var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9752__$1,inst_9750);
} else
{if((state_val_9753 === 4))
{var inst_9733 = (state_9752[7]);var inst_9733__$1 = (state_9752[2]);var inst_9734 = (inst_9733__$1 == null);var state_9752__$1 = (function (){var statearr_9755 = state_9752;(statearr_9755[7] = inst_9733__$1);
return statearr_9755;
})();if(cljs.core.truth_(inst_9734))
{var statearr_9756_9776 = state_9752__$1;(statearr_9756_9776[1] = 5);
} else
{var statearr_9757_9777 = state_9752__$1;(statearr_9757_9777[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 5))
{var inst_9736 = cljs.core.async.close_BANG_.call(null,tc);var inst_9737 = cljs.core.async.close_BANG_.call(null,fc);var state_9752__$1 = (function (){var statearr_9758 = state_9752;(statearr_9758[8] = inst_9736);
return statearr_9758;
})();var statearr_9759_9778 = state_9752__$1;(statearr_9759_9778[2] = inst_9737);
(statearr_9759_9778[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 6))
{var inst_9733 = (state_9752[7]);var inst_9739 = p.call(null,inst_9733);var state_9752__$1 = state_9752;if(cljs.core.truth_(inst_9739))
{var statearr_9760_9779 = state_9752__$1;(statearr_9760_9779[1] = 9);
} else
{var statearr_9761_9780 = state_9752__$1;(statearr_9761_9780[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 7))
{var inst_9748 = (state_9752[2]);var state_9752__$1 = state_9752;var statearr_9762_9781 = state_9752__$1;(statearr_9762_9781[2] = inst_9748);
(statearr_9762_9781[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 8))
{var inst_9745 = (state_9752[2]);var state_9752__$1 = (function (){var statearr_9763 = state_9752;(statearr_9763[9] = inst_9745);
return statearr_9763;
})();var statearr_9764_9782 = state_9752__$1;(statearr_9764_9782[2] = null);
(statearr_9764_9782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 9))
{var state_9752__$1 = state_9752;var statearr_9765_9783 = state_9752__$1;(statearr_9765_9783[2] = tc);
(statearr_9765_9783[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 10))
{var state_9752__$1 = state_9752;var statearr_9766_9784 = state_9752__$1;(statearr_9766_9784[2] = fc);
(statearr_9766_9784[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9753 === 11))
{var inst_9733 = (state_9752[7]);var inst_9743 = (state_9752[2]);var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9752__$1,8,inst_9743,inst_9733);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_9770 = [null,null,null,null,null,null,null,null,null,null];(statearr_9770[0] = state_machine__6823__auto__);
(statearr_9770[1] = 1);
return statearr_9770;
});
var state_machine__6823__auto____1 = (function (state_9752){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_9752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e9771){if((e9771 instanceof Object))
{var ex__6826__auto__ = e9771;var statearr_9772_9785 = state_9752;(statearr_9772_9785[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9786 = state_9752;
state_9752 = G__9786;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_9752){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_9752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_9773 = f__6893__auto__.call(null);(statearr_9773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___9774);
return statearr_9773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6892__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_9833){var state_val_9834 = (state_9833[1]);if((state_val_9834 === 7))
{var inst_9829 = (state_9833[2]);var state_9833__$1 = state_9833;var statearr_9835_9851 = state_9833__$1;(statearr_9835_9851[2] = inst_9829);
(statearr_9835_9851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 6))
{var inst_9822 = (state_9833[7]);var inst_9819 = (state_9833[8]);var inst_9826 = f.call(null,inst_9819,inst_9822);var inst_9819__$1 = inst_9826;var state_9833__$1 = (function (){var statearr_9836 = state_9833;(statearr_9836[8] = inst_9819__$1);
return statearr_9836;
})();var statearr_9837_9852 = state_9833__$1;(statearr_9837_9852[2] = null);
(statearr_9837_9852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 5))
{var inst_9819 = (state_9833[8]);var state_9833__$1 = state_9833;var statearr_9838_9853 = state_9833__$1;(statearr_9838_9853[2] = inst_9819);
(statearr_9838_9853[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 4))
{var inst_9822 = (state_9833[7]);var inst_9822__$1 = (state_9833[2]);var inst_9823 = (inst_9822__$1 == null);var state_9833__$1 = (function (){var statearr_9839 = state_9833;(statearr_9839[7] = inst_9822__$1);
return statearr_9839;
})();if(cljs.core.truth_(inst_9823))
{var statearr_9840_9854 = state_9833__$1;(statearr_9840_9854[1] = 5);
} else
{var statearr_9841_9855 = state_9833__$1;(statearr_9841_9855[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9834 === 3))
{var inst_9831 = (state_9833[2]);var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9833__$1,inst_9831);
} else
{if((state_val_9834 === 2))
{var state_9833__$1 = state_9833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9833__$1,4,ch);
} else
{if((state_val_9834 === 1))
{var inst_9819 = init;var state_9833__$1 = (function (){var statearr_9842 = state_9833;(statearr_9842[8] = inst_9819);
return statearr_9842;
})();var statearr_9843_9856 = state_9833__$1;(statearr_9843_9856[2] = null);
(statearr_9843_9856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_9847 = [null,null,null,null,null,null,null,null,null];(statearr_9847[0] = state_machine__6823__auto__);
(statearr_9847[1] = 1);
return statearr_9847;
});
var state_machine__6823__auto____1 = (function (state_9833){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_9833);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e9848){if((e9848 instanceof Object))
{var ex__6826__auto__ = e9848;var statearr_9849_9857 = state_9833;(statearr_9849_9857[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9858 = state_9833;
state_9833 = G__9858;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_9833){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_9833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_9850 = f__6893__auto__.call(null);(statearr_9850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto__);
return statearr_9850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return c__6892__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6892__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_9920){var state_val_9921 = (state_9920[1]);if((state_val_9921 === 1))
{var inst_9900 = cljs.core.seq.call(null,coll);var inst_9901 = inst_9900;var state_9920__$1 = (function (){var statearr_9922 = state_9920;(statearr_9922[7] = inst_9901);
return statearr_9922;
})();var statearr_9923_9941 = state_9920__$1;(statearr_9923_9941[2] = null);
(statearr_9923_9941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9921 === 2))
{var inst_9901 = (state_9920[7]);var state_9920__$1 = state_9920;if(cljs.core.truth_(inst_9901))
{var statearr_9924_9942 = state_9920__$1;(statearr_9924_9942[1] = 4);
} else
{var statearr_9925_9943 = state_9920__$1;(statearr_9925_9943[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9921 === 3))
{var inst_9918 = (state_9920[2]);var state_9920__$1 = state_9920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9920__$1,inst_9918);
} else
{if((state_val_9921 === 4))
{var inst_9901 = (state_9920[7]);var inst_9904 = cljs.core.first.call(null,inst_9901);var state_9920__$1 = state_9920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9920__$1,7,ch,inst_9904);
} else
{if((state_val_9921 === 5))
{var state_9920__$1 = state_9920;if(cljs.core.truth_(close_QMARK_))
{var statearr_9926_9944 = state_9920__$1;(statearr_9926_9944[1] = 8);
} else
{var statearr_9927_9945 = state_9920__$1;(statearr_9927_9945[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9921 === 6))
{var inst_9916 = (state_9920[2]);var state_9920__$1 = state_9920;var statearr_9928_9946 = state_9920__$1;(statearr_9928_9946[2] = inst_9916);
(statearr_9928_9946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9921 === 7))
{var inst_9901 = (state_9920[7]);var inst_9906 = (state_9920[2]);var inst_9907 = cljs.core.next.call(null,inst_9901);var inst_9901__$1 = inst_9907;var state_9920__$1 = (function (){var statearr_9929 = state_9920;(statearr_9929[8] = inst_9906);
(statearr_9929[7] = inst_9901__$1);
return statearr_9929;
})();var statearr_9930_9947 = state_9920__$1;(statearr_9930_9947[2] = null);
(statearr_9930_9947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9921 === 8))
{var inst_9911 = cljs.core.async.close_BANG_.call(null,ch);var state_9920__$1 = state_9920;var statearr_9931_9948 = state_9920__$1;(statearr_9931_9948[2] = inst_9911);
(statearr_9931_9948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9921 === 9))
{var state_9920__$1 = state_9920;var statearr_9932_9949 = state_9920__$1;(statearr_9932_9949[2] = null);
(statearr_9932_9949[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9921 === 10))
{var inst_9914 = (state_9920[2]);var state_9920__$1 = state_9920;var statearr_9933_9950 = state_9920__$1;(statearr_9933_9950[2] = inst_9914);
(statearr_9933_9950[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_9937 = [null,null,null,null,null,null,null,null,null];(statearr_9937[0] = state_machine__6823__auto__);
(statearr_9937[1] = 1);
return statearr_9937;
});
var state_machine__6823__auto____1 = (function (state_9920){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_9920);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e9938){if((e9938 instanceof Object))
{var ex__6826__auto__ = e9938;var statearr_9939_9951 = state_9920;(statearr_9939_9951[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9952 = state_9920;
state_9920 = G__9952;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_9920){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_9920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_9940 = f__6893__auto__.call(null);(statearr_9940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto__);
return statearr_9940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return c__6892__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9954 = {};return obj9954;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3389__auto__ = _;if(and__3389__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3389__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4028__auto__ = (((_ == null))?null:_);return (function (){var or__3401__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9956 = {};return obj9956;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10180 = (function (cs,ch,mult,meta10181){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10181 = meta10181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10180.cljs$lang$type = true;
cljs.core.async.t10180.cljs$lang$ctorStr = "cljs.core.async/t10180";
cljs.core.async.t10180.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10180");
});})(cs))
;
cljs.core.async.t10180.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10180.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10180.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10180.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10180.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10182){var self__ = this;
var _10182__$1 = this;return self__.meta10181;
});})(cs))
;
cljs.core.async.t10180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10182,meta10181__$1){var self__ = this;
var _10182__$1 = this;return (new cljs.core.async.t10180(self__.cs,self__.ch,self__.mult,meta10181__$1));
});})(cs))
;
cljs.core.async.__GT_t10180 = ((function (cs){
return (function __GT_t10180(cs__$1,ch__$1,mult__$1,meta10181){return (new cljs.core.async.t10180(cs__$1,ch__$1,mult__$1,meta10181));
});})(cs))
;
}
return (new cljs.core.async.t10180(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6892__auto___10403 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_10317){var state_val_10318 = (state_10317[1]);if((state_val_10318 === 32))
{var inst_10185 = (state_10317[7]);var inst_10261 = (state_10317[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10317,31,Object,null,30);var inst_10268 = cljs.core.async.put_BANG_.call(null,inst_10261,inst_10185,done);var state_10317__$1 = state_10317;var statearr_10319_10404 = state_10317__$1;(statearr_10319_10404[2] = inst_10268);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10317__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 1))
{var state_10317__$1 = state_10317;var statearr_10320_10405 = state_10317__$1;(statearr_10320_10405[2] = null);
(statearr_10320_10405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 33))
{var inst_10274 = (state_10317[9]);var inst_10276 = cljs.core.chunked_seq_QMARK_.call(null,inst_10274);var state_10317__$1 = state_10317;if(inst_10276)
{var statearr_10321_10406 = state_10317__$1;(statearr_10321_10406[1] = 36);
} else
{var statearr_10322_10407 = state_10317__$1;(statearr_10322_10407[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 2))
{var state_10317__$1 = state_10317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10317__$1,4,ch);
} else
{if((state_val_10318 === 34))
{var state_10317__$1 = state_10317;var statearr_10323_10408 = state_10317__$1;(statearr_10323_10408[2] = null);
(statearr_10323_10408[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 3))
{var inst_10315 = (state_10317[2]);var state_10317__$1 = state_10317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10317__$1,inst_10315);
} else
{if((state_val_10318 === 35))
{var inst_10299 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10324_10409 = state_10317__$1;(statearr_10324_10409[2] = inst_10299);
(statearr_10324_10409[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 4))
{var inst_10185 = (state_10317[7]);var inst_10185__$1 = (state_10317[2]);var inst_10186 = (inst_10185__$1 == null);var state_10317__$1 = (function (){var statearr_10325 = state_10317;(statearr_10325[7] = inst_10185__$1);
return statearr_10325;
})();if(cljs.core.truth_(inst_10186))
{var statearr_10326_10410 = state_10317__$1;(statearr_10326_10410[1] = 5);
} else
{var statearr_10327_10411 = state_10317__$1;(statearr_10327_10411[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 36))
{var inst_10274 = (state_10317[9]);var inst_10278 = cljs.core.chunk_first.call(null,inst_10274);var inst_10279 = cljs.core.chunk_rest.call(null,inst_10274);var inst_10280 = cljs.core.count.call(null,inst_10278);var inst_10253 = inst_10279;var inst_10254 = inst_10278;var inst_10255 = inst_10280;var inst_10256 = 0;var state_10317__$1 = (function (){var statearr_10328 = state_10317;(statearr_10328[10] = inst_10256);
(statearr_10328[11] = inst_10255);
(statearr_10328[12] = inst_10254);
(statearr_10328[13] = inst_10253);
return statearr_10328;
})();var statearr_10329_10412 = state_10317__$1;(statearr_10329_10412[2] = null);
(statearr_10329_10412[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 5))
{var inst_10192 = cljs.core.deref.call(null,cs);var inst_10193 = cljs.core.seq.call(null,inst_10192);var inst_10194 = inst_10193;var inst_10195 = null;var inst_10196 = 0;var inst_10197 = 0;var state_10317__$1 = (function (){var statearr_10330 = state_10317;(statearr_10330[14] = inst_10196);
(statearr_10330[15] = inst_10197);
(statearr_10330[16] = inst_10194);
(statearr_10330[17] = inst_10195);
return statearr_10330;
})();var statearr_10331_10413 = state_10317__$1;(statearr_10331_10413[2] = null);
(statearr_10331_10413[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 37))
{var inst_10274 = (state_10317[9]);var inst_10283 = cljs.core.first.call(null,inst_10274);var state_10317__$1 = (function (){var statearr_10332 = state_10317;(statearr_10332[18] = inst_10283);
return statearr_10332;
})();var statearr_10333_10414 = state_10317__$1;(statearr_10333_10414[2] = null);
(statearr_10333_10414[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 6))
{var inst_10245 = (state_10317[19]);var inst_10244 = cljs.core.deref.call(null,cs);var inst_10245__$1 = cljs.core.keys.call(null,inst_10244);var inst_10246 = cljs.core.count.call(null,inst_10245__$1);var inst_10247 = cljs.core.reset_BANG_.call(null,dctr,inst_10246);var inst_10252 = cljs.core.seq.call(null,inst_10245__$1);var inst_10253 = inst_10252;var inst_10254 = null;var inst_10255 = 0;var inst_10256 = 0;var state_10317__$1 = (function (){var statearr_10334 = state_10317;(statearr_10334[10] = inst_10256);
(statearr_10334[11] = inst_10255);
(statearr_10334[20] = inst_10247);
(statearr_10334[12] = inst_10254);
(statearr_10334[13] = inst_10253);
(statearr_10334[19] = inst_10245__$1);
return statearr_10334;
})();var statearr_10335_10415 = state_10317__$1;(statearr_10335_10415[2] = null);
(statearr_10335_10415[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 38))
{var inst_10296 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10336_10416 = state_10317__$1;(statearr_10336_10416[2] = inst_10296);
(statearr_10336_10416[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 7))
{var inst_10313 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10337_10417 = state_10317__$1;(statearr_10337_10417[2] = inst_10313);
(statearr_10337_10417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 39))
{var inst_10274 = (state_10317[9]);var inst_10292 = (state_10317[2]);var inst_10293 = cljs.core.next.call(null,inst_10274);var inst_10253 = inst_10293;var inst_10254 = null;var inst_10255 = 0;var inst_10256 = 0;var state_10317__$1 = (function (){var statearr_10338 = state_10317;(statearr_10338[10] = inst_10256);
(statearr_10338[11] = inst_10255);
(statearr_10338[12] = inst_10254);
(statearr_10338[13] = inst_10253);
(statearr_10338[21] = inst_10292);
return statearr_10338;
})();var statearr_10339_10418 = state_10317__$1;(statearr_10339_10418[2] = null);
(statearr_10339_10418[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 8))
{var inst_10196 = (state_10317[14]);var inst_10197 = (state_10317[15]);var inst_10199 = (inst_10197 < inst_10196);var inst_10200 = inst_10199;var state_10317__$1 = state_10317;if(cljs.core.truth_(inst_10200))
{var statearr_10340_10419 = state_10317__$1;(statearr_10340_10419[1] = 10);
} else
{var statearr_10341_10420 = state_10317__$1;(statearr_10341_10420[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 40))
{var inst_10283 = (state_10317[18]);var inst_10284 = (state_10317[2]);var inst_10285 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10286 = cljs.core.async.untap_STAR_.call(null,m,inst_10283);var state_10317__$1 = (function (){var statearr_10342 = state_10317;(statearr_10342[22] = inst_10284);
(statearr_10342[23] = inst_10285);
return statearr_10342;
})();var statearr_10343_10421 = state_10317__$1;(statearr_10343_10421[2] = inst_10286);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10317__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 9))
{var inst_10242 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10344_10422 = state_10317__$1;(statearr_10344_10422[2] = inst_10242);
(statearr_10344_10422[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 41))
{var inst_10283 = (state_10317[18]);var inst_10185 = (state_10317[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10317,40,Object,null,39);var inst_10290 = cljs.core.async.put_BANG_.call(null,inst_10283,inst_10185,done);var state_10317__$1 = state_10317;var statearr_10345_10423 = state_10317__$1;(statearr_10345_10423[2] = inst_10290);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10317__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 10))
{var inst_10197 = (state_10317[15]);var inst_10195 = (state_10317[17]);var inst_10203 = cljs.core._nth.call(null,inst_10195,inst_10197);var inst_10204 = cljs.core.nth.call(null,inst_10203,0,null);var inst_10205 = cljs.core.nth.call(null,inst_10203,1,null);var state_10317__$1 = (function (){var statearr_10346 = state_10317;(statearr_10346[24] = inst_10204);
return statearr_10346;
})();if(cljs.core.truth_(inst_10205))
{var statearr_10347_10424 = state_10317__$1;(statearr_10347_10424[1] = 13);
} else
{var statearr_10348_10425 = state_10317__$1;(statearr_10348_10425[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 42))
{var state_10317__$1 = state_10317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10317__$1,45,dchan);
} else
{if((state_val_10318 === 11))
{var inst_10194 = (state_10317[16]);var inst_10214 = (state_10317[25]);var inst_10214__$1 = cljs.core.seq.call(null,inst_10194);var state_10317__$1 = (function (){var statearr_10349 = state_10317;(statearr_10349[25] = inst_10214__$1);
return statearr_10349;
})();if(inst_10214__$1)
{var statearr_10350_10426 = state_10317__$1;(statearr_10350_10426[1] = 16);
} else
{var statearr_10351_10427 = state_10317__$1;(statearr_10351_10427[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 43))
{var state_10317__$1 = state_10317;var statearr_10352_10428 = state_10317__$1;(statearr_10352_10428[2] = null);
(statearr_10352_10428[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 12))
{var inst_10240 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10353_10429 = state_10317__$1;(statearr_10353_10429[2] = inst_10240);
(statearr_10353_10429[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 44))
{var inst_10310 = (state_10317[2]);var state_10317__$1 = (function (){var statearr_10354 = state_10317;(statearr_10354[26] = inst_10310);
return statearr_10354;
})();var statearr_10355_10430 = state_10317__$1;(statearr_10355_10430[2] = null);
(statearr_10355_10430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 13))
{var inst_10204 = (state_10317[24]);var inst_10207 = cljs.core.async.close_BANG_.call(null,inst_10204);var state_10317__$1 = state_10317;var statearr_10356_10431 = state_10317__$1;(statearr_10356_10431[2] = inst_10207);
(statearr_10356_10431[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 45))
{var inst_10307 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10360_10432 = state_10317__$1;(statearr_10360_10432[2] = inst_10307);
(statearr_10360_10432[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 14))
{var state_10317__$1 = state_10317;var statearr_10361_10433 = state_10317__$1;(statearr_10361_10433[2] = null);
(statearr_10361_10433[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 15))
{var inst_10196 = (state_10317[14]);var inst_10197 = (state_10317[15]);var inst_10194 = (state_10317[16]);var inst_10195 = (state_10317[17]);var inst_10210 = (state_10317[2]);var inst_10211 = (inst_10197 + 1);var tmp10357 = inst_10196;var tmp10358 = inst_10194;var tmp10359 = inst_10195;var inst_10194__$1 = tmp10358;var inst_10195__$1 = tmp10359;var inst_10196__$1 = tmp10357;var inst_10197__$1 = inst_10211;var state_10317__$1 = (function (){var statearr_10362 = state_10317;(statearr_10362[27] = inst_10210);
(statearr_10362[14] = inst_10196__$1);
(statearr_10362[15] = inst_10197__$1);
(statearr_10362[16] = inst_10194__$1);
(statearr_10362[17] = inst_10195__$1);
return statearr_10362;
})();var statearr_10363_10434 = state_10317__$1;(statearr_10363_10434[2] = null);
(statearr_10363_10434[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 16))
{var inst_10214 = (state_10317[25]);var inst_10216 = cljs.core.chunked_seq_QMARK_.call(null,inst_10214);var state_10317__$1 = state_10317;if(inst_10216)
{var statearr_10364_10435 = state_10317__$1;(statearr_10364_10435[1] = 19);
} else
{var statearr_10365_10436 = state_10317__$1;(statearr_10365_10436[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 17))
{var state_10317__$1 = state_10317;var statearr_10366_10437 = state_10317__$1;(statearr_10366_10437[2] = null);
(statearr_10366_10437[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 18))
{var inst_10238 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10367_10438 = state_10317__$1;(statearr_10367_10438[2] = inst_10238);
(statearr_10367_10438[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 19))
{var inst_10214 = (state_10317[25]);var inst_10218 = cljs.core.chunk_first.call(null,inst_10214);var inst_10219 = cljs.core.chunk_rest.call(null,inst_10214);var inst_10220 = cljs.core.count.call(null,inst_10218);var inst_10194 = inst_10219;var inst_10195 = inst_10218;var inst_10196 = inst_10220;var inst_10197 = 0;var state_10317__$1 = (function (){var statearr_10368 = state_10317;(statearr_10368[14] = inst_10196);
(statearr_10368[15] = inst_10197);
(statearr_10368[16] = inst_10194);
(statearr_10368[17] = inst_10195);
return statearr_10368;
})();var statearr_10369_10439 = state_10317__$1;(statearr_10369_10439[2] = null);
(statearr_10369_10439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 20))
{var inst_10214 = (state_10317[25]);var inst_10224 = cljs.core.first.call(null,inst_10214);var inst_10225 = cljs.core.nth.call(null,inst_10224,0,null);var inst_10226 = cljs.core.nth.call(null,inst_10224,1,null);var state_10317__$1 = (function (){var statearr_10370 = state_10317;(statearr_10370[28] = inst_10225);
return statearr_10370;
})();if(cljs.core.truth_(inst_10226))
{var statearr_10371_10440 = state_10317__$1;(statearr_10371_10440[1] = 22);
} else
{var statearr_10372_10441 = state_10317__$1;(statearr_10372_10441[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 21))
{var inst_10235 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10373_10442 = state_10317__$1;(statearr_10373_10442[2] = inst_10235);
(statearr_10373_10442[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 22))
{var inst_10225 = (state_10317[28]);var inst_10228 = cljs.core.async.close_BANG_.call(null,inst_10225);var state_10317__$1 = state_10317;var statearr_10374_10443 = state_10317__$1;(statearr_10374_10443[2] = inst_10228);
(statearr_10374_10443[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 23))
{var state_10317__$1 = state_10317;var statearr_10375_10444 = state_10317__$1;(statearr_10375_10444[2] = null);
(statearr_10375_10444[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 24))
{var inst_10214 = (state_10317[25]);var inst_10231 = (state_10317[2]);var inst_10232 = cljs.core.next.call(null,inst_10214);var inst_10194 = inst_10232;var inst_10195 = null;var inst_10196 = 0;var inst_10197 = 0;var state_10317__$1 = (function (){var statearr_10376 = state_10317;(statearr_10376[29] = inst_10231);
(statearr_10376[14] = inst_10196);
(statearr_10376[15] = inst_10197);
(statearr_10376[16] = inst_10194);
(statearr_10376[17] = inst_10195);
return statearr_10376;
})();var statearr_10377_10445 = state_10317__$1;(statearr_10377_10445[2] = null);
(statearr_10377_10445[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 25))
{var inst_10256 = (state_10317[10]);var inst_10255 = (state_10317[11]);var inst_10258 = (inst_10256 < inst_10255);var inst_10259 = inst_10258;var state_10317__$1 = state_10317;if(cljs.core.truth_(inst_10259))
{var statearr_10378_10446 = state_10317__$1;(statearr_10378_10446[1] = 27);
} else
{var statearr_10379_10447 = state_10317__$1;(statearr_10379_10447[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 26))
{var inst_10245 = (state_10317[19]);var inst_10303 = (state_10317[2]);var inst_10304 = cljs.core.seq.call(null,inst_10245);var state_10317__$1 = (function (){var statearr_10380 = state_10317;(statearr_10380[30] = inst_10303);
return statearr_10380;
})();if(inst_10304)
{var statearr_10381_10448 = state_10317__$1;(statearr_10381_10448[1] = 42);
} else
{var statearr_10382_10449 = state_10317__$1;(statearr_10382_10449[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 27))
{var inst_10256 = (state_10317[10]);var inst_10254 = (state_10317[12]);var inst_10261 = cljs.core._nth.call(null,inst_10254,inst_10256);var state_10317__$1 = (function (){var statearr_10383 = state_10317;(statearr_10383[8] = inst_10261);
return statearr_10383;
})();var statearr_10384_10450 = state_10317__$1;(statearr_10384_10450[2] = null);
(statearr_10384_10450[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 28))
{var inst_10253 = (state_10317[13]);var inst_10274 = (state_10317[9]);var inst_10274__$1 = cljs.core.seq.call(null,inst_10253);var state_10317__$1 = (function (){var statearr_10388 = state_10317;(statearr_10388[9] = inst_10274__$1);
return statearr_10388;
})();if(inst_10274__$1)
{var statearr_10389_10451 = state_10317__$1;(statearr_10389_10451[1] = 33);
} else
{var statearr_10390_10452 = state_10317__$1;(statearr_10390_10452[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 29))
{var inst_10301 = (state_10317[2]);var state_10317__$1 = state_10317;var statearr_10391_10453 = state_10317__$1;(statearr_10391_10453[2] = inst_10301);
(statearr_10391_10453[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 30))
{var inst_10256 = (state_10317[10]);var inst_10255 = (state_10317[11]);var inst_10254 = (state_10317[12]);var inst_10253 = (state_10317[13]);var inst_10270 = (state_10317[2]);var inst_10271 = (inst_10256 + 1);var tmp10385 = inst_10255;var tmp10386 = inst_10254;var tmp10387 = inst_10253;var inst_10253__$1 = tmp10387;var inst_10254__$1 = tmp10386;var inst_10255__$1 = tmp10385;var inst_10256__$1 = inst_10271;var state_10317__$1 = (function (){var statearr_10392 = state_10317;(statearr_10392[10] = inst_10256__$1);
(statearr_10392[11] = inst_10255__$1);
(statearr_10392[12] = inst_10254__$1);
(statearr_10392[13] = inst_10253__$1);
(statearr_10392[31] = inst_10270);
return statearr_10392;
})();var statearr_10393_10454 = state_10317__$1;(statearr_10393_10454[2] = null);
(statearr_10393_10454[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10318 === 31))
{var inst_10261 = (state_10317[8]);var inst_10262 = (state_10317[2]);var inst_10263 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10264 = cljs.core.async.untap_STAR_.call(null,m,inst_10261);var state_10317__$1 = (function (){var statearr_10394 = state_10317;(statearr_10394[32] = inst_10262);
(statearr_10394[33] = inst_10263);
return statearr_10394;
})();var statearr_10395_10455 = state_10317__$1;(statearr_10395_10455[2] = inst_10264);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10317__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_10399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10399[0] = state_machine__6823__auto__);
(statearr_10399[1] = 1);
return statearr_10399;
});
var state_machine__6823__auto____1 = (function (state_10317){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_10317);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e10400){if((e10400 instanceof Object))
{var ex__6826__auto__ = e10400;var statearr_10401_10456 = state_10317;(statearr_10401_10456[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10457 = state_10317;
state_10317 = G__10457;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_10317){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_10317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_10402 = f__6893__auto__.call(null);(statearr_10402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___10403);
return statearr_10402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10459 = {};return obj10459;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3389__auto__ = m;if(and__3389__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3389__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4028__auto__ = (((m == null))?null:m);return (function (){var or__3401__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10569 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10570){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10570 = meta10570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10569.cljs$lang$type = true;
cljs.core.async.t10569.cljs$lang$ctorStr = "cljs.core.async/t10569";
cljs.core.async.t10569.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10569");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10571){var self__ = this;
var _10571__$1 = this;return self__.meta10570;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10571,meta10570__$1){var self__ = this;
var _10571__$1 = this;return (new cljs.core.async.t10569(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10570__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10569 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10569(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10570){return (new cljs.core.async.t10569(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10570));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10569(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6892__auto___10678 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_10636){var state_val_10637 = (state_10636[1]);if((state_val_10637 === 1))
{var inst_10575 = (state_10636[7]);var inst_10575__$1 = calc_state.call(null);var inst_10576 = cljs.core.seq_QMARK_.call(null,inst_10575__$1);var state_10636__$1 = (function (){var statearr_10638 = state_10636;(statearr_10638[7] = inst_10575__$1);
return statearr_10638;
})();if(inst_10576)
{var statearr_10639_10679 = state_10636__$1;(statearr_10639_10679[1] = 2);
} else
{var statearr_10640_10680 = state_10636__$1;(statearr_10640_10680[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 2))
{var inst_10575 = (state_10636[7]);var inst_10578 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10575);var state_10636__$1 = state_10636;var statearr_10641_10681 = state_10636__$1;(statearr_10641_10681[2] = inst_10578);
(statearr_10641_10681[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 3))
{var inst_10575 = (state_10636[7]);var state_10636__$1 = state_10636;var statearr_10642_10682 = state_10636__$1;(statearr_10642_10682[2] = inst_10575);
(statearr_10642_10682[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 4))
{var inst_10575 = (state_10636[7]);var inst_10581 = (state_10636[2]);var inst_10582 = cljs.core.get.call(null,inst_10581,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10583 = cljs.core.get.call(null,inst_10581,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10584 = cljs.core.get.call(null,inst_10581,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10585 = inst_10575;var state_10636__$1 = (function (){var statearr_10643 = state_10636;(statearr_10643[8] = inst_10582);
(statearr_10643[9] = inst_10585);
(statearr_10643[10] = inst_10584);
(statearr_10643[11] = inst_10583);
return statearr_10643;
})();var statearr_10644_10683 = state_10636__$1;(statearr_10644_10683[2] = null);
(statearr_10644_10683[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 5))
{var inst_10585 = (state_10636[9]);var inst_10588 = cljs.core.seq_QMARK_.call(null,inst_10585);var state_10636__$1 = state_10636;if(inst_10588)
{var statearr_10645_10684 = state_10636__$1;(statearr_10645_10684[1] = 7);
} else
{var statearr_10646_10685 = state_10636__$1;(statearr_10646_10685[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 6))
{var inst_10634 = (state_10636[2]);var state_10636__$1 = state_10636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10636__$1,inst_10634);
} else
{if((state_val_10637 === 7))
{var inst_10585 = (state_10636[9]);var inst_10590 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10585);var state_10636__$1 = state_10636;var statearr_10647_10686 = state_10636__$1;(statearr_10647_10686[2] = inst_10590);
(statearr_10647_10686[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 8))
{var inst_10585 = (state_10636[9]);var state_10636__$1 = state_10636;var statearr_10648_10687 = state_10636__$1;(statearr_10648_10687[2] = inst_10585);
(statearr_10648_10687[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 9))
{var inst_10593 = (state_10636[12]);var inst_10593__$1 = (state_10636[2]);var inst_10594 = cljs.core.get.call(null,inst_10593__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10595 = cljs.core.get.call(null,inst_10593__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10596 = cljs.core.get.call(null,inst_10593__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10636__$1 = (function (){var statearr_10649 = state_10636;(statearr_10649[13] = inst_10596);
(statearr_10649[14] = inst_10595);
(statearr_10649[12] = inst_10593__$1);
return statearr_10649;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10636__$1,10,inst_10594);
} else
{if((state_val_10637 === 10))
{var inst_10600 = (state_10636[15]);var inst_10601 = (state_10636[16]);var inst_10599 = (state_10636[2]);var inst_10600__$1 = cljs.core.nth.call(null,inst_10599,0,null);var inst_10601__$1 = cljs.core.nth.call(null,inst_10599,1,null);var inst_10602 = (inst_10600__$1 == null);var inst_10603 = cljs.core._EQ_.call(null,inst_10601__$1,change);var inst_10604 = (inst_10602) || (inst_10603);var state_10636__$1 = (function (){var statearr_10650 = state_10636;(statearr_10650[15] = inst_10600__$1);
(statearr_10650[16] = inst_10601__$1);
return statearr_10650;
})();if(cljs.core.truth_(inst_10604))
{var statearr_10651_10688 = state_10636__$1;(statearr_10651_10688[1] = 11);
} else
{var statearr_10652_10689 = state_10636__$1;(statearr_10652_10689[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 11))
{var inst_10600 = (state_10636[15]);var inst_10606 = (inst_10600 == null);var state_10636__$1 = state_10636;if(cljs.core.truth_(inst_10606))
{var statearr_10653_10690 = state_10636__$1;(statearr_10653_10690[1] = 14);
} else
{var statearr_10654_10691 = state_10636__$1;(statearr_10654_10691[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 12))
{var inst_10615 = (state_10636[17]);var inst_10601 = (state_10636[16]);var inst_10596 = (state_10636[13]);var inst_10615__$1 = inst_10596.call(null,inst_10601);var state_10636__$1 = (function (){var statearr_10655 = state_10636;(statearr_10655[17] = inst_10615__$1);
return statearr_10655;
})();if(cljs.core.truth_(inst_10615__$1))
{var statearr_10656_10692 = state_10636__$1;(statearr_10656_10692[1] = 17);
} else
{var statearr_10657_10693 = state_10636__$1;(statearr_10657_10693[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 13))
{var inst_10632 = (state_10636[2]);var state_10636__$1 = state_10636;var statearr_10658_10694 = state_10636__$1;(statearr_10658_10694[2] = inst_10632);
(statearr_10658_10694[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 14))
{var inst_10601 = (state_10636[16]);var inst_10608 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10601);var state_10636__$1 = state_10636;var statearr_10659_10695 = state_10636__$1;(statearr_10659_10695[2] = inst_10608);
(statearr_10659_10695[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 15))
{var state_10636__$1 = state_10636;var statearr_10660_10696 = state_10636__$1;(statearr_10660_10696[2] = null);
(statearr_10660_10696[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 16))
{var inst_10611 = (state_10636[2]);var inst_10612 = calc_state.call(null);var inst_10585 = inst_10612;var state_10636__$1 = (function (){var statearr_10661 = state_10636;(statearr_10661[9] = inst_10585);
(statearr_10661[18] = inst_10611);
return statearr_10661;
})();var statearr_10662_10697 = state_10636__$1;(statearr_10662_10697[2] = null);
(statearr_10662_10697[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 17))
{var inst_10615 = (state_10636[17]);var state_10636__$1 = state_10636;var statearr_10663_10698 = state_10636__$1;(statearr_10663_10698[2] = inst_10615);
(statearr_10663_10698[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 18))
{var inst_10601 = (state_10636[16]);var inst_10596 = (state_10636[13]);var inst_10595 = (state_10636[14]);var inst_10618 = cljs.core.empty_QMARK_.call(null,inst_10596);var inst_10619 = inst_10595.call(null,inst_10601);var inst_10620 = cljs.core.not.call(null,inst_10619);var inst_10621 = (inst_10618) && (inst_10620);var state_10636__$1 = state_10636;var statearr_10664_10699 = state_10636__$1;(statearr_10664_10699[2] = inst_10621);
(statearr_10664_10699[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 19))
{var inst_10623 = (state_10636[2]);var state_10636__$1 = state_10636;if(cljs.core.truth_(inst_10623))
{var statearr_10665_10700 = state_10636__$1;(statearr_10665_10700[1] = 20);
} else
{var statearr_10666_10701 = state_10636__$1;(statearr_10666_10701[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 20))
{var inst_10600 = (state_10636[15]);var state_10636__$1 = state_10636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10636__$1,23,out,inst_10600);
} else
{if((state_val_10637 === 21))
{var state_10636__$1 = state_10636;var statearr_10667_10702 = state_10636__$1;(statearr_10667_10702[2] = null);
(statearr_10667_10702[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 22))
{var inst_10593 = (state_10636[12]);var inst_10629 = (state_10636[2]);var inst_10585 = inst_10593;var state_10636__$1 = (function (){var statearr_10668 = state_10636;(statearr_10668[19] = inst_10629);
(statearr_10668[9] = inst_10585);
return statearr_10668;
})();var statearr_10669_10703 = state_10636__$1;(statearr_10669_10703[2] = null);
(statearr_10669_10703[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10637 === 23))
{var inst_10626 = (state_10636[2]);var state_10636__$1 = state_10636;var statearr_10670_10704 = state_10636__$1;(statearr_10670_10704[2] = inst_10626);
(statearr_10670_10704[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_10674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10674[0] = state_machine__6823__auto__);
(statearr_10674[1] = 1);
return statearr_10674;
});
var state_machine__6823__auto____1 = (function (state_10636){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_10636);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e10675){if((e10675 instanceof Object))
{var ex__6826__auto__ = e10675;var statearr_10676_10705 = state_10636;(statearr_10676_10705[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10636);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10706 = state_10636;
state_10636 = G__10706;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_10636){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_10636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_10677 = f__6893__auto__.call(null);(statearr_10677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___10678);
return statearr_10677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10708 = {};return obj10708;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3389__auto__ = p;if(and__3389__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3389__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4028__auto__ = (((p == null))?null:p);return (function (){var or__3401__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3389__auto__ = p;if(and__3389__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3389__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4028__auto__ = (((p == null))?null:p);return (function (){var or__3401__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3389__auto__ = p;if(and__3389__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3389__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4028__auto__ = (((p == null))?null:p);return (function (){var or__3401__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3389__auto__ = p;if(and__3389__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3389__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4028__auto__ = (((p == null))?null:p);return (function (){var or__3401__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4028__auto__)]);if(or__3401__auto__)
{return or__3401__auto__;
} else
{var or__3401__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3401__auto____$1)
{return or__3401__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3401__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3401__auto__))
{return or__3401__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3401__auto__,mults){
return (function (p1__10709_SHARP_){if(cljs.core.truth_(p1__10709_SHARP_.call(null,topic)))
{return p1__10709_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10709_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3401__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10834 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10835){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10835 = meta10835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10834.cljs$lang$type = true;
cljs.core.async.t10834.cljs$lang$ctorStr = "cljs.core.async/t10834";
cljs.core.async.t10834.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10834");
});})(mults,ensure_mult))
;
cljs.core.async.t10834.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10834.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10834.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10834.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10834.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10834.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10836){var self__ = this;
var _10836__$1 = this;return self__.meta10835;
});})(mults,ensure_mult))
;
cljs.core.async.t10834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10836,meta10835__$1){var self__ = this;
var _10836__$1 = this;return (new cljs.core.async.t10834(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10835__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10834 = ((function (mults,ensure_mult){
return (function __GT_t10834(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10835){return (new cljs.core.async.t10834(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10835));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10834(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6892__auto___10958 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_10910){var state_val_10911 = (state_10910[1]);if((state_val_10911 === 1))
{var state_10910__$1 = state_10910;var statearr_10912_10959 = state_10910__$1;(statearr_10912_10959[2] = null);
(statearr_10912_10959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 2))
{var state_10910__$1 = state_10910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10910__$1,4,ch);
} else
{if((state_val_10911 === 3))
{var inst_10908 = (state_10910[2]);var state_10910__$1 = state_10910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10910__$1,inst_10908);
} else
{if((state_val_10911 === 4))
{var inst_10839 = (state_10910[7]);var inst_10839__$1 = (state_10910[2]);var inst_10840 = (inst_10839__$1 == null);var state_10910__$1 = (function (){var statearr_10913 = state_10910;(statearr_10913[7] = inst_10839__$1);
return statearr_10913;
})();if(cljs.core.truth_(inst_10840))
{var statearr_10914_10960 = state_10910__$1;(statearr_10914_10960[1] = 5);
} else
{var statearr_10915_10961 = state_10910__$1;(statearr_10915_10961[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 5))
{var inst_10846 = cljs.core.deref.call(null,mults);var inst_10847 = cljs.core.vals.call(null,inst_10846);var inst_10848 = cljs.core.seq.call(null,inst_10847);var inst_10849 = inst_10848;var inst_10850 = null;var inst_10851 = 0;var inst_10852 = 0;var state_10910__$1 = (function (){var statearr_10916 = state_10910;(statearr_10916[8] = inst_10850);
(statearr_10916[9] = inst_10851);
(statearr_10916[10] = inst_10852);
(statearr_10916[11] = inst_10849);
return statearr_10916;
})();var statearr_10917_10962 = state_10910__$1;(statearr_10917_10962[2] = null);
(statearr_10917_10962[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 6))
{var inst_10887 = (state_10910[12]);var inst_10839 = (state_10910[7]);var inst_10889 = (state_10910[13]);var inst_10887__$1 = topic_fn.call(null,inst_10839);var inst_10888 = cljs.core.deref.call(null,mults);var inst_10889__$1 = cljs.core.get.call(null,inst_10888,inst_10887__$1);var state_10910__$1 = (function (){var statearr_10918 = state_10910;(statearr_10918[12] = inst_10887__$1);
(statearr_10918[13] = inst_10889__$1);
return statearr_10918;
})();if(cljs.core.truth_(inst_10889__$1))
{var statearr_10919_10963 = state_10910__$1;(statearr_10919_10963[1] = 19);
} else
{var statearr_10920_10964 = state_10910__$1;(statearr_10920_10964[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 7))
{var inst_10906 = (state_10910[2]);var state_10910__$1 = state_10910;var statearr_10921_10965 = state_10910__$1;(statearr_10921_10965[2] = inst_10906);
(statearr_10921_10965[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 8))
{var inst_10851 = (state_10910[9]);var inst_10852 = (state_10910[10]);var inst_10854 = (inst_10852 < inst_10851);var inst_10855 = inst_10854;var state_10910__$1 = state_10910;if(cljs.core.truth_(inst_10855))
{var statearr_10925_10966 = state_10910__$1;(statearr_10925_10966[1] = 10);
} else
{var statearr_10926_10967 = state_10910__$1;(statearr_10926_10967[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 9))
{var inst_10885 = (state_10910[2]);var state_10910__$1 = state_10910;var statearr_10927_10968 = state_10910__$1;(statearr_10927_10968[2] = inst_10885);
(statearr_10927_10968[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 10))
{var inst_10850 = (state_10910[8]);var inst_10851 = (state_10910[9]);var inst_10852 = (state_10910[10]);var inst_10849 = (state_10910[11]);var inst_10857 = cljs.core._nth.call(null,inst_10850,inst_10852);var inst_10858 = cljs.core.async.muxch_STAR_.call(null,inst_10857);var inst_10859 = cljs.core.async.close_BANG_.call(null,inst_10858);var inst_10860 = (inst_10852 + 1);var tmp10922 = inst_10850;var tmp10923 = inst_10851;var tmp10924 = inst_10849;var inst_10849__$1 = tmp10924;var inst_10850__$1 = tmp10922;var inst_10851__$1 = tmp10923;var inst_10852__$1 = inst_10860;var state_10910__$1 = (function (){var statearr_10928 = state_10910;(statearr_10928[8] = inst_10850__$1);
(statearr_10928[14] = inst_10859);
(statearr_10928[9] = inst_10851__$1);
(statearr_10928[10] = inst_10852__$1);
(statearr_10928[11] = inst_10849__$1);
return statearr_10928;
})();var statearr_10929_10969 = state_10910__$1;(statearr_10929_10969[2] = null);
(statearr_10929_10969[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 11))
{var inst_10863 = (state_10910[15]);var inst_10849 = (state_10910[11]);var inst_10863__$1 = cljs.core.seq.call(null,inst_10849);var state_10910__$1 = (function (){var statearr_10930 = state_10910;(statearr_10930[15] = inst_10863__$1);
return statearr_10930;
})();if(inst_10863__$1)
{var statearr_10931_10970 = state_10910__$1;(statearr_10931_10970[1] = 13);
} else
{var statearr_10932_10971 = state_10910__$1;(statearr_10932_10971[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 12))
{var inst_10883 = (state_10910[2]);var state_10910__$1 = state_10910;var statearr_10933_10972 = state_10910__$1;(statearr_10933_10972[2] = inst_10883);
(statearr_10933_10972[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 13))
{var inst_10863 = (state_10910[15]);var inst_10865 = cljs.core.chunked_seq_QMARK_.call(null,inst_10863);var state_10910__$1 = state_10910;if(inst_10865)
{var statearr_10934_10973 = state_10910__$1;(statearr_10934_10973[1] = 16);
} else
{var statearr_10935_10974 = state_10910__$1;(statearr_10935_10974[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 14))
{var state_10910__$1 = state_10910;var statearr_10936_10975 = state_10910__$1;(statearr_10936_10975[2] = null);
(statearr_10936_10975[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 15))
{var inst_10881 = (state_10910[2]);var state_10910__$1 = state_10910;var statearr_10937_10976 = state_10910__$1;(statearr_10937_10976[2] = inst_10881);
(statearr_10937_10976[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 16))
{var inst_10863 = (state_10910[15]);var inst_10867 = cljs.core.chunk_first.call(null,inst_10863);var inst_10868 = cljs.core.chunk_rest.call(null,inst_10863);var inst_10869 = cljs.core.count.call(null,inst_10867);var inst_10849 = inst_10868;var inst_10850 = inst_10867;var inst_10851 = inst_10869;var inst_10852 = 0;var state_10910__$1 = (function (){var statearr_10938 = state_10910;(statearr_10938[8] = inst_10850);
(statearr_10938[9] = inst_10851);
(statearr_10938[10] = inst_10852);
(statearr_10938[11] = inst_10849);
return statearr_10938;
})();var statearr_10939_10977 = state_10910__$1;(statearr_10939_10977[2] = null);
(statearr_10939_10977[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 17))
{var inst_10863 = (state_10910[15]);var inst_10872 = cljs.core.first.call(null,inst_10863);var inst_10873 = cljs.core.async.muxch_STAR_.call(null,inst_10872);var inst_10874 = cljs.core.async.close_BANG_.call(null,inst_10873);var inst_10875 = cljs.core.next.call(null,inst_10863);var inst_10849 = inst_10875;var inst_10850 = null;var inst_10851 = 0;var inst_10852 = 0;var state_10910__$1 = (function (){var statearr_10940 = state_10910;(statearr_10940[8] = inst_10850);
(statearr_10940[16] = inst_10874);
(statearr_10940[9] = inst_10851);
(statearr_10940[10] = inst_10852);
(statearr_10940[11] = inst_10849);
return statearr_10940;
})();var statearr_10941_10978 = state_10910__$1;(statearr_10941_10978[2] = null);
(statearr_10941_10978[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 18))
{var inst_10878 = (state_10910[2]);var state_10910__$1 = state_10910;var statearr_10942_10979 = state_10910__$1;(statearr_10942_10979[2] = inst_10878);
(statearr_10942_10979[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 19))
{var state_10910__$1 = state_10910;var statearr_10943_10980 = state_10910__$1;(statearr_10943_10980[2] = null);
(statearr_10943_10980[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 20))
{var state_10910__$1 = state_10910;var statearr_10944_10981 = state_10910__$1;(statearr_10944_10981[2] = null);
(statearr_10944_10981[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 21))
{var inst_10903 = (state_10910[2]);var state_10910__$1 = (function (){var statearr_10945 = state_10910;(statearr_10945[17] = inst_10903);
return statearr_10945;
})();var statearr_10946_10982 = state_10910__$1;(statearr_10946_10982[2] = null);
(statearr_10946_10982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 22))
{var inst_10900 = (state_10910[2]);var state_10910__$1 = state_10910;var statearr_10947_10983 = state_10910__$1;(statearr_10947_10983[2] = inst_10900);
(statearr_10947_10983[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 23))
{var inst_10887 = (state_10910[12]);var inst_10891 = (state_10910[2]);var inst_10892 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10887);var state_10910__$1 = (function (){var statearr_10948 = state_10910;(statearr_10948[18] = inst_10891);
return statearr_10948;
})();var statearr_10949_10984 = state_10910__$1;(statearr_10949_10984[2] = inst_10892);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10910__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10911 === 24))
{var inst_10839 = (state_10910[7]);var inst_10889 = (state_10910[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10910,23,Object,null,22);var inst_10896 = cljs.core.async.muxch_STAR_.call(null,inst_10889);var state_10910__$1 = state_10910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10910__$1,25,inst_10896,inst_10839);
} else
{if((state_val_10911 === 25))
{var inst_10898 = (state_10910[2]);var state_10910__$1 = state_10910;var statearr_10950_10985 = state_10910__$1;(statearr_10950_10985[2] = inst_10898);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10910__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_10954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10954[0] = state_machine__6823__auto__);
(statearr_10954[1] = 1);
return statearr_10954;
});
var state_machine__6823__auto____1 = (function (state_10910){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_10910);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e10955){if((e10955 instanceof Object))
{var ex__6826__auto__ = e10955;var statearr_10956_10986 = state_10910;(statearr_10956_10986[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10987 = state_10910;
state_10910 = G__10987;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_10910){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_10910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_10957 = f__6893__auto__.call(null);(statearr_10957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___10958);
return statearr_10957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6892__auto___11124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_11094){var state_val_11095 = (state_11094[1]);if((state_val_11095 === 1))
{var state_11094__$1 = state_11094;var statearr_11096_11125 = state_11094__$1;(statearr_11096_11125[2] = null);
(statearr_11096_11125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 2))
{var inst_11057 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11058 = 0;var state_11094__$1 = (function (){var statearr_11097 = state_11094;(statearr_11097[7] = inst_11058);
(statearr_11097[8] = inst_11057);
return statearr_11097;
})();var statearr_11098_11126 = state_11094__$1;(statearr_11098_11126[2] = null);
(statearr_11098_11126[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 3))
{var inst_11092 = (state_11094[2]);var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11094__$1,inst_11092);
} else
{if((state_val_11095 === 4))
{var inst_11058 = (state_11094[7]);var inst_11060 = (inst_11058 < cnt);var state_11094__$1 = state_11094;if(cljs.core.truth_(inst_11060))
{var statearr_11099_11127 = state_11094__$1;(statearr_11099_11127[1] = 6);
} else
{var statearr_11100_11128 = state_11094__$1;(statearr_11100_11128[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 5))
{var inst_11078 = (state_11094[2]);var state_11094__$1 = (function (){var statearr_11101 = state_11094;(statearr_11101[9] = inst_11078);
return statearr_11101;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11094__$1,12,dchan);
} else
{if((state_val_11095 === 6))
{var state_11094__$1 = state_11094;var statearr_11102_11129 = state_11094__$1;(statearr_11102_11129[2] = null);
(statearr_11102_11129[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 7))
{var state_11094__$1 = state_11094;var statearr_11103_11130 = state_11094__$1;(statearr_11103_11130[2] = null);
(statearr_11103_11130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 8))
{var inst_11076 = (state_11094[2]);var state_11094__$1 = state_11094;var statearr_11104_11131 = state_11094__$1;(statearr_11104_11131[2] = inst_11076);
(statearr_11104_11131[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 9))
{var inst_11058 = (state_11094[7]);var inst_11071 = (state_11094[2]);var inst_11072 = (inst_11058 + 1);var inst_11058__$1 = inst_11072;var state_11094__$1 = (function (){var statearr_11105 = state_11094;(statearr_11105[7] = inst_11058__$1);
(statearr_11105[10] = inst_11071);
return statearr_11105;
})();var statearr_11106_11132 = state_11094__$1;(statearr_11106_11132[2] = null);
(statearr_11106_11132[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 10))
{var inst_11062 = (state_11094[2]);var inst_11063 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11094__$1 = (function (){var statearr_11107 = state_11094;(statearr_11107[11] = inst_11062);
return statearr_11107;
})();var statearr_11108_11133 = state_11094__$1;(statearr_11108_11133[2] = inst_11063);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11094__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 11))
{var inst_11058 = (state_11094[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11094,10,Object,null,9);var inst_11067 = chs__$1.call(null,inst_11058);var inst_11068 = done.call(null,inst_11058);var inst_11069 = cljs.core.async.take_BANG_.call(null,inst_11067,inst_11068);var state_11094__$1 = state_11094;var statearr_11109_11134 = state_11094__$1;(statearr_11109_11134[2] = inst_11069);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11094__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 12))
{var inst_11080 = (state_11094[12]);var inst_11080__$1 = (state_11094[2]);var inst_11081 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11080__$1);var state_11094__$1 = (function (){var statearr_11110 = state_11094;(statearr_11110[12] = inst_11080__$1);
return statearr_11110;
})();if(cljs.core.truth_(inst_11081))
{var statearr_11111_11135 = state_11094__$1;(statearr_11111_11135[1] = 13);
} else
{var statearr_11112_11136 = state_11094__$1;(statearr_11112_11136[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 13))
{var inst_11083 = cljs.core.async.close_BANG_.call(null,out);var state_11094__$1 = state_11094;var statearr_11113_11137 = state_11094__$1;(statearr_11113_11137[2] = inst_11083);
(statearr_11113_11137[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 14))
{var inst_11080 = (state_11094[12]);var inst_11085 = cljs.core.apply.call(null,f,inst_11080);var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11094__$1,16,out,inst_11085);
} else
{if((state_val_11095 === 15))
{var inst_11090 = (state_11094[2]);var state_11094__$1 = state_11094;var statearr_11114_11138 = state_11094__$1;(statearr_11114_11138[2] = inst_11090);
(statearr_11114_11138[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 16))
{var inst_11087 = (state_11094[2]);var state_11094__$1 = (function (){var statearr_11115 = state_11094;(statearr_11115[13] = inst_11087);
return statearr_11115;
})();var statearr_11116_11139 = state_11094__$1;(statearr_11116_11139[2] = null);
(statearr_11116_11139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_11120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11120[0] = state_machine__6823__auto__);
(statearr_11120[1] = 1);
return statearr_11120;
});
var state_machine__6823__auto____1 = (function (state_11094){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_11094);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e11121){if((e11121 instanceof Object))
{var ex__6826__auto__ = e11121;var statearr_11122_11140 = state_11094;(statearr_11122_11140[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11141 = state_11094;
state_11094 = G__11141;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_11094){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_11094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_11123 = f__6893__auto__.call(null);(statearr_11123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___11124);
return statearr_11123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6892__auto___11249 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_11225){var state_val_11226 = (state_11225[1]);if((state_val_11226 === 1))
{var inst_11196 = cljs.core.vec.call(null,chs);var inst_11197 = inst_11196;var state_11225__$1 = (function (){var statearr_11227 = state_11225;(statearr_11227[7] = inst_11197);
return statearr_11227;
})();var statearr_11228_11250 = state_11225__$1;(statearr_11228_11250[2] = null);
(statearr_11228_11250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11226 === 2))
{var inst_11197 = (state_11225[7]);var inst_11199 = cljs.core.count.call(null,inst_11197);var inst_11200 = (inst_11199 > 0);var state_11225__$1 = state_11225;if(cljs.core.truth_(inst_11200))
{var statearr_11229_11251 = state_11225__$1;(statearr_11229_11251[1] = 4);
} else
{var statearr_11230_11252 = state_11225__$1;(statearr_11230_11252[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11226 === 3))
{var inst_11223 = (state_11225[2]);var state_11225__$1 = state_11225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11225__$1,inst_11223);
} else
{if((state_val_11226 === 4))
{var inst_11197 = (state_11225[7]);var state_11225__$1 = state_11225;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11225__$1,7,inst_11197);
} else
{if((state_val_11226 === 5))
{var inst_11219 = cljs.core.async.close_BANG_.call(null,out);var state_11225__$1 = state_11225;var statearr_11231_11253 = state_11225__$1;(statearr_11231_11253[2] = inst_11219);
(statearr_11231_11253[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11226 === 6))
{var inst_11221 = (state_11225[2]);var state_11225__$1 = state_11225;var statearr_11232_11254 = state_11225__$1;(statearr_11232_11254[2] = inst_11221);
(statearr_11232_11254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11226 === 7))
{var inst_11204 = (state_11225[8]);var inst_11205 = (state_11225[9]);var inst_11204__$1 = (state_11225[2]);var inst_11205__$1 = cljs.core.nth.call(null,inst_11204__$1,0,null);var inst_11206 = cljs.core.nth.call(null,inst_11204__$1,1,null);var inst_11207 = (inst_11205__$1 == null);var state_11225__$1 = (function (){var statearr_11233 = state_11225;(statearr_11233[8] = inst_11204__$1);
(statearr_11233[9] = inst_11205__$1);
(statearr_11233[10] = inst_11206);
return statearr_11233;
})();if(cljs.core.truth_(inst_11207))
{var statearr_11234_11255 = state_11225__$1;(statearr_11234_11255[1] = 8);
} else
{var statearr_11235_11256 = state_11225__$1;(statearr_11235_11256[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11226 === 8))
{var inst_11204 = (state_11225[8]);var inst_11205 = (state_11225[9]);var inst_11206 = (state_11225[10]);var inst_11197 = (state_11225[7]);var inst_11209 = (function (){var c = inst_11206;var v = inst_11205;var vec__11202 = inst_11204;var cs = inst_11197;return ((function (c,v,vec__11202,cs,inst_11204,inst_11205,inst_11206,inst_11197,state_val_11226){
return (function (p1__11142_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11142_SHARP_);
});
;})(c,v,vec__11202,cs,inst_11204,inst_11205,inst_11206,inst_11197,state_val_11226))
})();var inst_11210 = cljs.core.filterv.call(null,inst_11209,inst_11197);var inst_11197__$1 = inst_11210;var state_11225__$1 = (function (){var statearr_11236 = state_11225;(statearr_11236[7] = inst_11197__$1);
return statearr_11236;
})();var statearr_11237_11257 = state_11225__$1;(statearr_11237_11257[2] = null);
(statearr_11237_11257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11226 === 9))
{var inst_11205 = (state_11225[9]);var state_11225__$1 = state_11225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11225__$1,11,out,inst_11205);
} else
{if((state_val_11226 === 10))
{var inst_11217 = (state_11225[2]);var state_11225__$1 = state_11225;var statearr_11239_11258 = state_11225__$1;(statearr_11239_11258[2] = inst_11217);
(statearr_11239_11258[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11226 === 11))
{var inst_11197 = (state_11225[7]);var inst_11214 = (state_11225[2]);var tmp11238 = inst_11197;var inst_11197__$1 = tmp11238;var state_11225__$1 = (function (){var statearr_11240 = state_11225;(statearr_11240[11] = inst_11214);
(statearr_11240[7] = inst_11197__$1);
return statearr_11240;
})();var statearr_11241_11259 = state_11225__$1;(statearr_11241_11259[2] = null);
(statearr_11241_11259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_11245 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11245[0] = state_machine__6823__auto__);
(statearr_11245[1] = 1);
return statearr_11245;
});
var state_machine__6823__auto____1 = (function (state_11225){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_11225);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e11246){if((e11246 instanceof Object))
{var ex__6826__auto__ = e11246;var statearr_11247_11260 = state_11225;(statearr_11247_11260[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11225);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11261 = state_11225;
state_11225 = G__11261;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_11225){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_11225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_11248 = f__6893__auto__.call(null);(statearr_11248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___11249);
return statearr_11248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6892__auto___11354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_11331){var state_val_11332 = (state_11331[1]);if((state_val_11332 === 1))
{var inst_11308 = 0;var state_11331__$1 = (function (){var statearr_11333 = state_11331;(statearr_11333[7] = inst_11308);
return statearr_11333;
})();var statearr_11334_11355 = state_11331__$1;(statearr_11334_11355[2] = null);
(statearr_11334_11355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11332 === 2))
{var inst_11308 = (state_11331[7]);var inst_11310 = (inst_11308 < n);var state_11331__$1 = state_11331;if(cljs.core.truth_(inst_11310))
{var statearr_11335_11356 = state_11331__$1;(statearr_11335_11356[1] = 4);
} else
{var statearr_11336_11357 = state_11331__$1;(statearr_11336_11357[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11332 === 3))
{var inst_11328 = (state_11331[2]);var inst_11329 = cljs.core.async.close_BANG_.call(null,out);var state_11331__$1 = (function (){var statearr_11337 = state_11331;(statearr_11337[8] = inst_11328);
return statearr_11337;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11331__$1,inst_11329);
} else
{if((state_val_11332 === 4))
{var state_11331__$1 = state_11331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11331__$1,7,ch);
} else
{if((state_val_11332 === 5))
{var state_11331__$1 = state_11331;var statearr_11338_11358 = state_11331__$1;(statearr_11338_11358[2] = null);
(statearr_11338_11358[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11332 === 6))
{var inst_11326 = (state_11331[2]);var state_11331__$1 = state_11331;var statearr_11339_11359 = state_11331__$1;(statearr_11339_11359[2] = inst_11326);
(statearr_11339_11359[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11332 === 7))
{var inst_11313 = (state_11331[9]);var inst_11313__$1 = (state_11331[2]);var inst_11314 = (inst_11313__$1 == null);var inst_11315 = cljs.core.not.call(null,inst_11314);var state_11331__$1 = (function (){var statearr_11340 = state_11331;(statearr_11340[9] = inst_11313__$1);
return statearr_11340;
})();if(inst_11315)
{var statearr_11341_11360 = state_11331__$1;(statearr_11341_11360[1] = 8);
} else
{var statearr_11342_11361 = state_11331__$1;(statearr_11342_11361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11332 === 8))
{var inst_11313 = (state_11331[9]);var state_11331__$1 = state_11331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11331__$1,11,out,inst_11313);
} else
{if((state_val_11332 === 9))
{var state_11331__$1 = state_11331;var statearr_11343_11362 = state_11331__$1;(statearr_11343_11362[2] = null);
(statearr_11343_11362[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11332 === 10))
{var inst_11323 = (state_11331[2]);var state_11331__$1 = state_11331;var statearr_11344_11363 = state_11331__$1;(statearr_11344_11363[2] = inst_11323);
(statearr_11344_11363[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11332 === 11))
{var inst_11308 = (state_11331[7]);var inst_11318 = (state_11331[2]);var inst_11319 = (inst_11308 + 1);var inst_11308__$1 = inst_11319;var state_11331__$1 = (function (){var statearr_11345 = state_11331;(statearr_11345[7] = inst_11308__$1);
(statearr_11345[10] = inst_11318);
return statearr_11345;
})();var statearr_11346_11364 = state_11331__$1;(statearr_11346_11364[2] = null);
(statearr_11346_11364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_11350 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11350[0] = state_machine__6823__auto__);
(statearr_11350[1] = 1);
return statearr_11350;
});
var state_machine__6823__auto____1 = (function (state_11331){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_11331);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e11351){if((e11351 instanceof Object))
{var ex__6826__auto__ = e11351;var statearr_11352_11365 = state_11331;(statearr_11352_11365[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11366 = state_11331;
state_11331 = G__11366;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_11331){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_11331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_11353 = f__6893__auto__.call(null);(statearr_11353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___11354);
return statearr_11353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6892__auto___11463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_11438){var state_val_11439 = (state_11438[1]);if((state_val_11439 === 1))
{var inst_11415 = null;var state_11438__$1 = (function (){var statearr_11440 = state_11438;(statearr_11440[7] = inst_11415);
return statearr_11440;
})();var statearr_11441_11464 = state_11438__$1;(statearr_11441_11464[2] = null);
(statearr_11441_11464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11439 === 2))
{var state_11438__$1 = state_11438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11438__$1,4,ch);
} else
{if((state_val_11439 === 3))
{var inst_11435 = (state_11438[2]);var inst_11436 = cljs.core.async.close_BANG_.call(null,out);var state_11438__$1 = (function (){var statearr_11442 = state_11438;(statearr_11442[8] = inst_11435);
return statearr_11442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11438__$1,inst_11436);
} else
{if((state_val_11439 === 4))
{var inst_11418 = (state_11438[9]);var inst_11418__$1 = (state_11438[2]);var inst_11419 = (inst_11418__$1 == null);var inst_11420 = cljs.core.not.call(null,inst_11419);var state_11438__$1 = (function (){var statearr_11443 = state_11438;(statearr_11443[9] = inst_11418__$1);
return statearr_11443;
})();if(inst_11420)
{var statearr_11444_11465 = state_11438__$1;(statearr_11444_11465[1] = 5);
} else
{var statearr_11445_11466 = state_11438__$1;(statearr_11445_11466[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11439 === 5))
{var inst_11415 = (state_11438[7]);var inst_11418 = (state_11438[9]);var inst_11422 = cljs.core._EQ_.call(null,inst_11418,inst_11415);var state_11438__$1 = state_11438;if(inst_11422)
{var statearr_11446_11467 = state_11438__$1;(statearr_11446_11467[1] = 8);
} else
{var statearr_11447_11468 = state_11438__$1;(statearr_11447_11468[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11439 === 6))
{var state_11438__$1 = state_11438;var statearr_11449_11469 = state_11438__$1;(statearr_11449_11469[2] = null);
(statearr_11449_11469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11439 === 7))
{var inst_11433 = (state_11438[2]);var state_11438__$1 = state_11438;var statearr_11450_11470 = state_11438__$1;(statearr_11450_11470[2] = inst_11433);
(statearr_11450_11470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11439 === 8))
{var inst_11415 = (state_11438[7]);var tmp11448 = inst_11415;var inst_11415__$1 = tmp11448;var state_11438__$1 = (function (){var statearr_11451 = state_11438;(statearr_11451[7] = inst_11415__$1);
return statearr_11451;
})();var statearr_11452_11471 = state_11438__$1;(statearr_11452_11471[2] = null);
(statearr_11452_11471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11439 === 9))
{var inst_11418 = (state_11438[9]);var state_11438__$1 = state_11438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11438__$1,11,out,inst_11418);
} else
{if((state_val_11439 === 10))
{var inst_11430 = (state_11438[2]);var state_11438__$1 = state_11438;var statearr_11453_11472 = state_11438__$1;(statearr_11453_11472[2] = inst_11430);
(statearr_11453_11472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11439 === 11))
{var inst_11418 = (state_11438[9]);var inst_11427 = (state_11438[2]);var inst_11415 = inst_11418;var state_11438__$1 = (function (){var statearr_11454 = state_11438;(statearr_11454[10] = inst_11427);
(statearr_11454[7] = inst_11415);
return statearr_11454;
})();var statearr_11455_11473 = state_11438__$1;(statearr_11455_11473[2] = null);
(statearr_11455_11473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_11459 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11459[0] = state_machine__6823__auto__);
(statearr_11459[1] = 1);
return statearr_11459;
});
var state_machine__6823__auto____1 = (function (state_11438){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_11438);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e11460){if((e11460 instanceof Object))
{var ex__6826__auto__ = e11460;var statearr_11461_11474 = state_11438;(statearr_11461_11474[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11475 = state_11438;
state_11438 = G__11475;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_11438){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_11438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_11462 = f__6893__auto__.call(null);(statearr_11462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___11463);
return statearr_11462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6892__auto___11610 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_11580){var state_val_11581 = (state_11580[1]);if((state_val_11581 === 1))
{var inst_11543 = (new Array(n));var inst_11544 = inst_11543;var inst_11545 = 0;var state_11580__$1 = (function (){var statearr_11582 = state_11580;(statearr_11582[7] = inst_11544);
(statearr_11582[8] = inst_11545);
return statearr_11582;
})();var statearr_11583_11611 = state_11580__$1;(statearr_11583_11611[2] = null);
(statearr_11583_11611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 2))
{var state_11580__$1 = state_11580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11580__$1,4,ch);
} else
{if((state_val_11581 === 3))
{var inst_11578 = (state_11580[2]);var state_11580__$1 = state_11580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11580__$1,inst_11578);
} else
{if((state_val_11581 === 4))
{var inst_11548 = (state_11580[9]);var inst_11548__$1 = (state_11580[2]);var inst_11549 = (inst_11548__$1 == null);var inst_11550 = cljs.core.not.call(null,inst_11549);var state_11580__$1 = (function (){var statearr_11584 = state_11580;(statearr_11584[9] = inst_11548__$1);
return statearr_11584;
})();if(inst_11550)
{var statearr_11585_11612 = state_11580__$1;(statearr_11585_11612[1] = 5);
} else
{var statearr_11586_11613 = state_11580__$1;(statearr_11586_11613[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 5))
{var inst_11548 = (state_11580[9]);var inst_11544 = (state_11580[7]);var inst_11553 = (state_11580[10]);var inst_11545 = (state_11580[8]);var inst_11552 = (inst_11544[inst_11545] = inst_11548);var inst_11553__$1 = (inst_11545 + 1);var inst_11554 = (inst_11553__$1 < n);var state_11580__$1 = (function (){var statearr_11587 = state_11580;(statearr_11587[10] = inst_11553__$1);
(statearr_11587[11] = inst_11552);
return statearr_11587;
})();if(cljs.core.truth_(inst_11554))
{var statearr_11588_11614 = state_11580__$1;(statearr_11588_11614[1] = 8);
} else
{var statearr_11589_11615 = state_11580__$1;(statearr_11589_11615[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 6))
{var inst_11545 = (state_11580[8]);var inst_11566 = (inst_11545 > 0);var state_11580__$1 = state_11580;if(cljs.core.truth_(inst_11566))
{var statearr_11591_11616 = state_11580__$1;(statearr_11591_11616[1] = 12);
} else
{var statearr_11592_11617 = state_11580__$1;(statearr_11592_11617[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 7))
{var inst_11576 = (state_11580[2]);var state_11580__$1 = state_11580;var statearr_11593_11618 = state_11580__$1;(statearr_11593_11618[2] = inst_11576);
(statearr_11593_11618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 8))
{var inst_11544 = (state_11580[7]);var inst_11553 = (state_11580[10]);var tmp11590 = inst_11544;var inst_11544__$1 = tmp11590;var inst_11545 = inst_11553;var state_11580__$1 = (function (){var statearr_11594 = state_11580;(statearr_11594[7] = inst_11544__$1);
(statearr_11594[8] = inst_11545);
return statearr_11594;
})();var statearr_11595_11619 = state_11580__$1;(statearr_11595_11619[2] = null);
(statearr_11595_11619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 9))
{var inst_11544 = (state_11580[7]);var inst_11558 = cljs.core.vec.call(null,inst_11544);var state_11580__$1 = state_11580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11580__$1,11,out,inst_11558);
} else
{if((state_val_11581 === 10))
{var inst_11564 = (state_11580[2]);var state_11580__$1 = state_11580;var statearr_11596_11620 = state_11580__$1;(statearr_11596_11620[2] = inst_11564);
(statearr_11596_11620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 11))
{var inst_11560 = (state_11580[2]);var inst_11561 = (new Array(n));var inst_11544 = inst_11561;var inst_11545 = 0;var state_11580__$1 = (function (){var statearr_11597 = state_11580;(statearr_11597[12] = inst_11560);
(statearr_11597[7] = inst_11544);
(statearr_11597[8] = inst_11545);
return statearr_11597;
})();var statearr_11598_11621 = state_11580__$1;(statearr_11598_11621[2] = null);
(statearr_11598_11621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 12))
{var inst_11544 = (state_11580[7]);var inst_11568 = cljs.core.vec.call(null,inst_11544);var state_11580__$1 = state_11580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11580__$1,15,out,inst_11568);
} else
{if((state_val_11581 === 13))
{var state_11580__$1 = state_11580;var statearr_11599_11622 = state_11580__$1;(statearr_11599_11622[2] = null);
(statearr_11599_11622[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 14))
{var inst_11573 = (state_11580[2]);var inst_11574 = cljs.core.async.close_BANG_.call(null,out);var state_11580__$1 = (function (){var statearr_11600 = state_11580;(statearr_11600[13] = inst_11573);
return statearr_11600;
})();var statearr_11601_11623 = state_11580__$1;(statearr_11601_11623[2] = inst_11574);
(statearr_11601_11623[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11581 === 15))
{var inst_11570 = (state_11580[2]);var state_11580__$1 = state_11580;var statearr_11602_11624 = state_11580__$1;(statearr_11602_11624[2] = inst_11570);
(statearr_11602_11624[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_11606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11606[0] = state_machine__6823__auto__);
(statearr_11606[1] = 1);
return statearr_11606;
});
var state_machine__6823__auto____1 = (function (state_11580){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_11580);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e11607){if((e11607 instanceof Object))
{var ex__6826__auto__ = e11607;var statearr_11608_11625 = state_11580;(statearr_11608_11625[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11626 = state_11580;
state_11580 = G__11626;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_11580){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_11580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_11609 = f__6893__auto__.call(null);(statearr_11609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___11610);
return statearr_11609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6892__auto___11769 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6893__auto__ = (function (){var switch__6822__auto__ = (function (state_11739){var state_val_11740 = (state_11739[1]);if((state_val_11740 === 1))
{var inst_11698 = [];var inst_11699 = inst_11698;var inst_11700 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11739__$1 = (function (){var statearr_11741 = state_11739;(statearr_11741[7] = inst_11699);
(statearr_11741[8] = inst_11700);
return statearr_11741;
})();var statearr_11742_11770 = state_11739__$1;(statearr_11742_11770[2] = null);
(statearr_11742_11770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 2))
{var state_11739__$1 = state_11739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11739__$1,4,ch);
} else
{if((state_val_11740 === 3))
{var inst_11737 = (state_11739[2]);var state_11739__$1 = state_11739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11739__$1,inst_11737);
} else
{if((state_val_11740 === 4))
{var inst_11703 = (state_11739[9]);var inst_11703__$1 = (state_11739[2]);var inst_11704 = (inst_11703__$1 == null);var inst_11705 = cljs.core.not.call(null,inst_11704);var state_11739__$1 = (function (){var statearr_11743 = state_11739;(statearr_11743[9] = inst_11703__$1);
return statearr_11743;
})();if(inst_11705)
{var statearr_11744_11771 = state_11739__$1;(statearr_11744_11771[1] = 5);
} else
{var statearr_11745_11772 = state_11739__$1;(statearr_11745_11772[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 5))
{var inst_11703 = (state_11739[9]);var inst_11707 = (state_11739[10]);var inst_11700 = (state_11739[8]);var inst_11707__$1 = f.call(null,inst_11703);var inst_11708 = cljs.core._EQ_.call(null,inst_11707__$1,inst_11700);var inst_11709 = cljs.core.keyword_identical_QMARK_.call(null,inst_11700,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11710 = (inst_11708) || (inst_11709);var state_11739__$1 = (function (){var statearr_11746 = state_11739;(statearr_11746[10] = inst_11707__$1);
return statearr_11746;
})();if(cljs.core.truth_(inst_11710))
{var statearr_11747_11773 = state_11739__$1;(statearr_11747_11773[1] = 8);
} else
{var statearr_11748_11774 = state_11739__$1;(statearr_11748_11774[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 6))
{var inst_11699 = (state_11739[7]);var inst_11724 = inst_11699.length;var inst_11725 = (inst_11724 > 0);var state_11739__$1 = state_11739;if(cljs.core.truth_(inst_11725))
{var statearr_11750_11775 = state_11739__$1;(statearr_11750_11775[1] = 12);
} else
{var statearr_11751_11776 = state_11739__$1;(statearr_11751_11776[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 7))
{var inst_11735 = (state_11739[2]);var state_11739__$1 = state_11739;var statearr_11752_11777 = state_11739__$1;(statearr_11752_11777[2] = inst_11735);
(statearr_11752_11777[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 8))
{var inst_11703 = (state_11739[9]);var inst_11699 = (state_11739[7]);var inst_11707 = (state_11739[10]);var inst_11712 = inst_11699.push(inst_11703);var tmp11749 = inst_11699;var inst_11699__$1 = tmp11749;var inst_11700 = inst_11707;var state_11739__$1 = (function (){var statearr_11753 = state_11739;(statearr_11753[7] = inst_11699__$1);
(statearr_11753[11] = inst_11712);
(statearr_11753[8] = inst_11700);
return statearr_11753;
})();var statearr_11754_11778 = state_11739__$1;(statearr_11754_11778[2] = null);
(statearr_11754_11778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 9))
{var inst_11699 = (state_11739[7]);var inst_11715 = cljs.core.vec.call(null,inst_11699);var state_11739__$1 = state_11739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11739__$1,11,out,inst_11715);
} else
{if((state_val_11740 === 10))
{var inst_11722 = (state_11739[2]);var state_11739__$1 = state_11739;var statearr_11755_11779 = state_11739__$1;(statearr_11755_11779[2] = inst_11722);
(statearr_11755_11779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 11))
{var inst_11703 = (state_11739[9]);var inst_11707 = (state_11739[10]);var inst_11717 = (state_11739[2]);var inst_11718 = [];var inst_11719 = inst_11718.push(inst_11703);var inst_11699 = inst_11718;var inst_11700 = inst_11707;var state_11739__$1 = (function (){var statearr_11756 = state_11739;(statearr_11756[7] = inst_11699);
(statearr_11756[12] = inst_11719);
(statearr_11756[13] = inst_11717);
(statearr_11756[8] = inst_11700);
return statearr_11756;
})();var statearr_11757_11780 = state_11739__$1;(statearr_11757_11780[2] = null);
(statearr_11757_11780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 12))
{var inst_11699 = (state_11739[7]);var inst_11727 = cljs.core.vec.call(null,inst_11699);var state_11739__$1 = state_11739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11739__$1,15,out,inst_11727);
} else
{if((state_val_11740 === 13))
{var state_11739__$1 = state_11739;var statearr_11758_11781 = state_11739__$1;(statearr_11758_11781[2] = null);
(statearr_11758_11781[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740
//# sourceMappingURL=async.js.map_11739[2]);var inst_11733 = cljs.core.async.close_BANG_.call(null,out);var state_11739__$1 = (function (){var statearr_11759 = state_11739;(statearr_11759[14] = inst_11732);
return statearr_11759;
})();var statearr_11760_11782 = state_11739__$1;(statearr_11760_11782[2] = inst_11733);
(statearr_11760_11782[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11740 === 15))
{var inst_11729 = (state_11739[2]);var state_11739__$1 = state_11739;var statearr_11761_11783 = state_11739__$1;(statearr_11761_11783[2] = inst_11729);
(statearr_11761_11783[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6822__auto__){
return (function() {
var state_machine__6823__auto__ = null;
var state_machine__6823__auto____0 = (function (){var statearr_11765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11765[0] = state_machine__6823__auto__);
(statearr_11765[1] = 1);
return statearr_11765;
});
var state_machine__6823__auto____1 = (function (state_11739){while(true){
var ret_value__6824__auto__ = (function (){try{while(true){
var result__6825__auto__ = switch__6822__auto__.call(null,state_11739);if(cljs.core.keyword_identical_QMARK_.call(null,result__6825__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6825__auto__;
}
break;
}
}catch (e11766){if((e11766 instanceof Object))
{var ex__6826__auto__ = e11766;var statearr_11767_11784 = state_11739;(statearr_11767_11784[5] = ex__6826__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6824__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11785 = state_11739;
state_11739 = G__11785;
continue;
}
} else
{return ret_value__6824__auto__;
}
break;
}
});
state_machine__6823__auto__ = function(state_11739){
switch(arguments.length){
case 0:
return state_machine__6823__auto____0.call(this);
case 1:
return state_machine__6823__auto____1.call(this,state_11739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6823__auto____0;
state_machine__6823__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6823__auto____1;
return state_machine__6823__auto__;
})()
;})(switch__6822__auto__))
})();var state__6894__auto__ = (function (){var statearr_11768 = f__6893__auto__.call(null);(statearr_11768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6892__auto___11769);
return statearr_11768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6894__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map