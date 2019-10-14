/**
 * Created by trungquandev.com's author on 12/10/2019.
 * src/controllers/auth.js
 */
const debug = console.log.bind(console);
const jwtHelper = require("../helpers/jwt.helper");

// Biến cục bộ trên server này sẽ lưu trữ tạm danh sách token, trong dự án thực tế, hãy lưu vào Redis hoặc DB
let tokenList = {};

/**
 * controller login
 * @param {*} req 
 * @param {*} res 
 */
let login = async (req, res) => {
  try {
    debug(`Đang giả lập hành động đăng nhập thành công với Email: ${req.body.email} và Password: ${req.body.password}`);
    // Mình sẽ comment mô tả lại một số bước khi làm thực tế cho các bạn như sau nhé:
    // - Đầu tiên Kiểm tra xem email người dùng đã tồn tại trong hệ thống hay chưa?
    // - Nếu chưa tồn tại thì reject: User not found.
    // - Nếu tồn tại user thì sẽ lấy password mà user truyền lên, băm ra và so sánh với mật khẩu của user lưu trong Database
    // - Nếu password sai thì reject: Password is incorrect.
    // - Nếu password đúng thì chúng ta bắt đầu thực hiện tạo mã JWT và gửi về cho người dùng.
    // Trong ví dụ demo này mình sẽ coi như tất cả các bước xác thực ở trên đều ok, mình chỉ xử lý phần JWT trở về sau thôi nhé:
    debug(`Thực hiện fake thông tin user...`);
    const userFakeData = {
      _id: "1234-5678-910JQK-tqd",
      name: "Trung Quân",
      email: req.body.email,
    };

    debug(`Thực hiện tạo mã Token, [thời gian sống 1 giờ.]`);
    const tokenLife = process.env.TOKEN_LIFE || "1h";
    // Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
    const tokenSecret = process.env.TOKEN_SECRET || "token-secret-example-trungquandev.com-green-cat-a@";
    // Tạo token
    const token = await jwtHelper.generateToken(userFakeData, tokenSecret, tokenLife);
    
    debug(`Thực hiện tạo mã Refresh Token, [thời gian sống 10 năm] =))`);
    const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "3650d";
    // Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refresh-token-secret-example-trungquandev.com-green-cat-a@";
    // Tạo refresh token
    const refreshToken = await jwtHelper.generateToken(userFakeData, refreshTokenSecret, refreshTokenLife);

    // Lưu lại mã Refresh token, kèm thông tin của user để sau này sử dụng lại.
    tokenList[refreshToken] = userFakeData;
    
    debug(`Gửi Token và Refresh Token về cho client...`);
    return res.status(200).json({token, refreshToken});
  } catch (error) {
    return res.status(500).json(error);
  }
}

/**
 * controller refreshToken
 * @param {*} req 
 * @param {*} res 
 */
let refreshToken = (req, res) => {
  // User gửi mã refresh token kèm theo trong body
  const refreshTokenFromClient = req.body.refreshToken;
  // debug(tokenList);
  
  if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
    try {
      // await jwtHelper.verifyToken();
      debug("1");
    } catch (error) {
      debug(error);
      res.status(403).json({
        message: 'Invalid refresh token.',
      });
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};

module.exports = {
  login: login,
  refreshToken: refreshToken,
}
