import request from "../../../utils/request";

export function getList(params) {
  request("http://jdys.test/api/attest/get_cert_detail", {
    method: "post",
    data: {
      ...params,
    },
    skipErrorHandler: true,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
