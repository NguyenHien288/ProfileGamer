const express = require("express");
const router = express.Router();
const service = require("./book.service");
const authService = require("../auth/auth.service");

router.get("/", authService.authentication, async function(req, res) {
  try {
    const data = await service.find(req.user, req.query);
    res.status(200).send({
      data: data
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.post("/", async function(req, res) {
  try {
    const data = await service.create(req.body);
    res.status(200).send({
      data: data
    });
  } catch (err) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.get("/:id", async function(req, res) {
  try {
    const data = await service.findById(req.params.id);
    res.status(200).send({
      data: data
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.put("/:id", async function(req, res) {
  try {
    const data = await service.update(req.params.id, req.body);
    res.status(200).send({
      data: data
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.delete("/:id", async function(req, res) {
  try {
    const data = await service.delete(req.params.id);
    res.status(200).send({
      data: data
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
});

module.exports = router;
