/**
 * Created by trungquandev.com's author on 16/10/2019.
 * src/controllers/Friend.js
 */
const debug = console.log.bind(console);

let friendLists = (req, res) => {
  debug(`Xác thực token hợp lệ, thực hiện giả lập lấy danh sách bạn bè của user và trả về cho người dùng...`);
  // Lưu ý khi làm thực tế thì việc lấy danh sách này là query tới DB để lấy nhé. Ở đây mình chỉ mock thôi.
  const friends = [
    {
      name: "Cat: Russian Blue",
    },
    {
      name: "Cat: Maine Coon",
    },
    {
      name: "Cat: Balinese",
    },
  ];
  return res.status(200).json(friends);
}

module.exports = {
  friendLists: friendLists,
};
