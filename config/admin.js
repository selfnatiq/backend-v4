module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd84aac90901ea9f1ead15b7af7a5b0cf'),
  },
});
