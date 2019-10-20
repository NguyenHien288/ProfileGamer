const repository = require("./book.repository.js");
const authService = require("../auth/auth.service");

const find = async function(user, query) {
  // Authorize
  let auth = authService.authorization(user, ["admin", "user"]);
  if (auth) {
    return await repository.find(query);
  } else {
    throw new Error("Unauthorized");
  }
};

const findById = async function(id) {
  return await repository.findById(id);
};

const create = async function(data) {
  // Validate
  if (!data || !data.title || !data.author) {
    throw new Error("Missing input!");
  }

  return await repository.create(data);
};

const update = async function(id, data) {
  // Validate
  const existedRecord = await repository.findById(id);
  if (!existedRecord) {
    throw new Error("Entity not found");
  }

  return await repository.update(id, data);
};

const deleteOne = async function(id) {
  // Validate
  const existedRecord = await repository.findById(id);
  if (!existedRecord) {
    throw new Error("Entity not found");
  }

  return await repository.delete(id);
};

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne
};
