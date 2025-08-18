#!/bin/bash

# GitHub仓库推送脚本
# 请先在GitHub上创建仓库，然后替换下面的YOUR_GITHUB_USERNAME

echo "请输入您的GitHub用户名:"
read GITHUB_USERNAME

echo "请输入仓库名称 (默认: babyaivideo):"
read REPO_NAME
REPO_NAME=${REPO_NAME:-babyaivideo}

# 添加远程仓库
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# 查看远程仓库
echo "远程仓库已添加:"
git remote -v

# 推送到GitHub
echo "正在推送到GitHub..."
git branch -M main
git push -u origin main

echo "推送完成！"
echo "您的项目现在可以在这里访问: https://github.com/$GITHUB_USERNAME/$REPO_NAME"