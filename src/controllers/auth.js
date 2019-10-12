/**
 * Created by trungquandev.com's author on 12/10/2019.
 * src/controllers/auth.js
 */
const jwt = require("jsonwebtoken");
const debug = console.log.bind(console);

// class AuthController {
//   /**
//    * private function generateToken
//    * @param {_id, name. email} user 
//    */
//   generateToken(user) {
//     debug("vaof dyay");
//     const userData = {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//     }

//     const mySecretSignature = process.env.SECRET_SIGNATURE || "trungquandev-green-cat-a@";
//     const myCustomExpiration = "1h";

//     return jwt.sign({data: userData}, mySecretSignature, {expiresIn: myCustomExpiration});
//   }

//   /**
//    * Login function
//    * @param {*} email 
//    * @param {*} password 
//    */
//   login(req, res) {
//     try {
//       debug(`Đang giả lập hành động đăng nhập thành công với Email: ${req.body.email} và Password: ${req.body.password}`);
//       // Mình sẽ comment mô tả lại một số bước khi làm thực tế cho các bạn như sau nhé:
//       // - Đầu tiên Kiểm tra xem email người dùng đã tồn tại trong hệ thống hay chưa?
//       // - Nếu chưa tồn tại thì reject: User not found.
//       // - Nếu tồn tại user thì sẽ lấy password mà user truyền lên, băm ra và so sánh với mật khẩu của user lưu trong Database
//       // - Nếu password sai thì reject: Password is incorrect.
//       // - Nếu password đúng thì chúng ta bắt đầu thực hiện tạo mã JWT và gửi về cho người dùng.
//       // Trong ví dụ demo này mình sẽ coi như tất cả các bước xác thực ở trên đều ok, mình chỉ xử lý phần JWT trở về sau thôi nhé:
//       debug(`Thực hiện fake thông tin user...`);
//       const userFake = {
//         _id: "1234-5678-910JQK-tqd",
//         name: "Trung Quân",
//         email: req.body.email,
//       };

//       debug(`Thực hiện tạo mã JWT...`);
//       const jwtToken = this.generateToken(userFake);
      
//       debug(`Thực hiện gửi Token về cho client...`);
//       return res.status(200).json({token: jwtToken});
//     } catch (error) {
//       return res.status(500).json(error);
//     }
//   }
// }

class AuthController {
  generateToken(userData){
    return new Promise((resolve, reject) => {
      return resolve("super.getName()");
    });
  }
 
  async login(req, res) {
    const a = await this.generateToken();
    console.log("toi la a", a)
  }
}

console.log(new AuthController().login());

module.exports = new AuthController();
