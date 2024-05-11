const setting = {
  "vim.useSystemClipboard": true,
  "vim.highlightedyank.color": "rgba(151,210,81, 1.0)",
  "vim.leader": "<space>", // leader key is space
  "vim.handleKeys": {
    "<C-a>": false, // use vscode ctrl + a
    "<C-f>": false,
    "<C-d>": true,
    "<C-s>": false,
    "<C-z>": false,
    "<C-w>": false,
    "<C-p>": false, // use vscode ctrl + p to open file
  },
  "vim.normalModeKeyBindings": [
    // {
    //     "before": [":"],
    //     "commands": [
    //         "workbench.action.showCommands",
    //     ],
    //     "silent": true
    // },
    { // ctrl+M will fold all   j and k will unfold  this me  jk will not break fold
      "before": [
        "k"
      ],
      "after": [
        "g",
        "k"
      ]
    },
    { // fix jk break fold
      "before": [
        "j"
      ],
      "after": [
        "g",
        "j"
      ]
    },
    { // <leader> + j 跳转到上一位置
      "before": [
        "<leader>",
        "p"
      ],
      "commands": [
        "extension.vim_ctrl+o"
      ]
    },
    { // <leader> + k 跳转到下一位置
      "before": [
        "<leader>",
        "n"
      ],
      "commands": [
        "extension.vim_ctrl+i"
      ]
    },
    { // gf 跳转到编辑器 <C-p> ctrl+p
      "before": [
        "g",
        "f"
      ],
      "commands": [
        "workbench.action.showAllEditors"
      ]
    },
    { // gh 跳转到左面的编辑器
      "before": [
        "H"
      ],
      "commands": [
        "workbench.action.previousEditor"
      ]
    },
    { // gh 跳转到左面的编辑器
      "before": [
        "L"
      ],
      "commands": [
        "workbench.action.nextEditor"
      ]
    },
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": [
        "<leader>",
        "d"
      ],
      "after": [
        "d",
        "d"
      ]
    },
    { // ctrl+d   will scroll down 20 lines and will not break fold
      "before": [
        "<C-d>"
      ],
      // "commands": [
      //   "scrollPageDown"
      // ]
      "after": [
        "2",
        "0",
        "g",
        "j",
        "z",
        "z",
      ]
    },
    {
      "before": [
        "<C-u>"
      ],
      // "commands": [
      //   "scrollPageUp"
      // ]
      "after": [
        "2",
        "0",
        "g",
        "k",
        "z",
        "z"
      ]
    },
    {
      "before": [
        "<C-n>"
      ],
      "commands": [
        ":nohl"
      ]
    },
  ],
}