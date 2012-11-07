## hamlcc

Usage:

    hamlcc path/to/file.haml

This tool compiles an haml file into javascript file loadable via AMD, for usage inside a browser.
It uses node's haml-js as a back-end

## Emacs flymake mode

hamlcc ships with hamlint binary when installed globally using npm. You can easily integrate it in emacs's flymake mode. Just copy paste following lines into your emacs init.el

    (defun flymake-hamlint-init ()
      (let* ((temp-file (flymake-init-create-temp-buffer-copy
                         'flymake-create-temp-inplace))
             (local-file (file-relative-name
                          temp-file
                        (file-name-directory buffer-file-name)))
             (arglist (list local-file)))
        (list 'hamlint' arglist)))
    (add-to-list 'flymake-allowed-file-name-masks
                 '("\\.haml\\'" flymake-hamlint-init))

One can decorate the haml file with the first line looking like:

    -#lint-input {context_var1:"",context_var2:""}

This will tell hamlint what context your template is supposed to be run with.

