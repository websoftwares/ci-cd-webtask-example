module.exports = function (context, cb) {
  cb(null, { hello_you: context.data.name || 'Anonymous' });
}
