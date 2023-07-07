const APIError = require("../utils/APIError");
const { decodeToken } = require("./../api/user/generate-token");
const userDao = require("./../api/user/user.dao");
const adminDao = require("./../api/admin/admin.dao");
/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Header Authentication
 */
module.exports.verifyAccessToken = async (req, res, next) => {
  try {
    const props = req.headers;
    if (props.authorization) {
      /* Decode token for verify user */
      const decode = await decodeToken(props.authorization);
      if (!decode) {
        throw new APIError({ message: "Invalid Token", status: 401 });
      }
      let user = null;
      user = await userDao.checkUserExist(decode.payload.mobile);
      /* Check user is already register or not */
      if (user) {
        req.headers["user"] = user;
        next();
      } else {
        throw new APIError({ message: "Invalid Token", status: 401 });
      }
    } else {
      throw new APIError({
        message: "Authorization not provided!",
        status: 401,
      });
    }
  } catch (error) {
    // throw new APIError({ message: 'Invalid Token', status: 404 });
    next({ message: "Authorization not provided!", status: 401 });
  }
};
