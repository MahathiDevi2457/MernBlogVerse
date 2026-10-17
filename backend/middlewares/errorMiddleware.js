function notFound(req, res, next) {
  const error = new Error("Route not found");
  error.statusCode = 404;
  next(error);
}

function errorHandler(err, req, res, next) {
  console.error(err);

  if (res.headersSent) return next(err);

  res.status(err.statusCode || 500).json({
    message:
      err.statusCode && err.statusCode < 500
        ? err.message
        : "Internal server error",
  });
}

module.exports = { notFound, errorHandler };