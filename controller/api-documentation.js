import path from 'path';

export const apiDocumentation = async (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/../redoc-static.html`));
};
