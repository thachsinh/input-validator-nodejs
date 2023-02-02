class InvalidParam extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidParam';
  }
}

module.exports = InvalidParam;
