# 🧑🏻‍💻 oh-my-zsh

Use Spaceship theme and Nerd Fonts to build simple terminal

Clone this repo:

```shell
git clone https://github.com/spaceship-prompt/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1
```

Symlink spaceship.zsh-theme to your oh-my-zsh custom themes directory:

```shell
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```

Install Nerd Fonts by useing homebrew

```shell
brew tap homebrew/cask-fonts
brew install --cask font-hack-nerd-font
```

and finally copy my .zshrc profile to yours. reboot terminal
