function Event(name) {
  this.name = name;
  this.callbacks = [];
}

Event.prototype.registerCallback = function (callback) {
  this.callbacks.push(callback);
};

function Emitter() {
  this.events = {};
}

Emitter.prototype.emit = function (name, args) {
  this.events[name].callbacks.forEach(function (callback) {
    callback(args);
  });
};

Emitter.prototype.subscribeListener = function (name, callback) {
  if (this.events[name]) this.events[name].registerCallback(callback);
  else {
    this.events[name] = new Event(name);
    this.events[name].registerCallback(callback);
  }
};

Emitter.prototype.unsubscribeListener = function (name, callback) {
  if (this.events[name]) this.events[name].registerCallback(callback);
  else {
    this.events[name] = new Event(name);
    this.events[name].registerCallback(callback);
  }
};

export default Emitter;
