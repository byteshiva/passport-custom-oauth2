/*
 * @constructor
 * @param {Object} CONFIG
 * @api public
 */

function appConfig(CONFIG) {
  CONFIG = CONFIG || {};
  
  this._getByPath = function(obj, path){
    var keys = path.split('.');
    var output = obj;
    keys.forEach(function(k){
        output = output[k];
        if (output === undefined){ throw new Error("The config key '"+path+"' does not exists."); }
    });
    if (output === undefined){ throw new Error("The config key '"+path+"' does not exists."); }
    return output;
  };

  this._hasByPath = function(obj, path) {
    var keys = path.split('.');
      var output = obj;
      keys.forEach(function(k){
          output = output[k];
          if (output === undefined){ return false; }
      });
      if (output === undefined){ return false; }
      return true;
  }
}

appConfig.prototype.getProxyPort = function() { 
    return this.get('proxyPort'); 
}

appConfig.prototype.get = function(path) { 
    return this._getByPath(this.CONFIG, path); 
};

appConfig.prototype.has = function(path) { 
    return this._hasByPath(this.CONFIG, path); 
};

appConfig.prototype.getProxyHost =  function() { 
    return this.get('proxyHost'); 
};
    
appConfig.prototype.hasProxyHost = function() { 
    return this.has('proxyHost'); 
};

module.exports = appConfig;
