/**
 * @fileoverview The XRX++ main class.
 */

goog.provide('xrx');



/**
 * @namespace xrx
 */


/*
goog.require('xrx.func');
goog.require('xrx.mvc');
goog.require('xrx.mvc.Components');
goog.require('xrx.mvc.Mvc');
*/



xrx.install = function(opt_callback) {
  xrx.mvc.Mvc.install(undefined, opt_callback);
};
