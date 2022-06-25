// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function handler(req, res) {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${"ad4d37b10ba5730e01fb"}`);
  // axios
  //   .get(
  //     "https://github.com/login/oauth/authorize",
  //     {
  //       params: {
  //         client_id: "ad4d37b10ba5730e01fb",
  //       },
  //     }
  //     // { headers }
  //   )
  //   .then(function (response) {
  //     res.send(response);
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // res.status(200).json({ name: "John Doe" });
}
