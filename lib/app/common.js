
export function notFound(req, res) {
  res.redirect('/notFound.html');
}

export function internalError(err, req, res, next) {
  console.error(err);
  res.redirect('/internalError.html');
}
