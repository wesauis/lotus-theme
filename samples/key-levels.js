const L = "abc";
let H = "key";
const _ = {
  f() {},
  F: () => {},
  X: {},
  Y,
  [L]: "",
  [H]: "",
  "■": {
    f() {},
    F: () => {},
    X: {},
    Y,
    "■": [
      {
        "■": {
          "■": {
            "■": {
              "■": {
                "■": {
                  "■": {
                    "■": {
                      "■": {
                        "■": {
                          "■": {},
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    ],
  },
};
