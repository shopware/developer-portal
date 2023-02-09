{ pkgs, config, ... }:

{
  packages = [
    pkgs.gnupatch
  ];

  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs-18_x;
}