### git的使用
、、、
1.先创建远程仓库
2.初始化本地仓库 git init 第一次之后不用
                git add .  [暂存]
3.提交          git commit -m "first commit " 
4.连接远程仓库   git remote add origin https://github.com/MIWV-TEAM/Miwv1_Front.git

5.加载到远程    使用 git push -u origin master
6.从远程仓库拉取 git pull 
7.合并分支 ：git merge
查看连接情况  git remote -v
查看状态     git status
删除远程仓库连接 git remote rm origin

git push origin master -f /行让本地分支覆盖远程分支

20200923
git branch dev 创建本地分支
git checkout dev 切换到新创建的分支
git push origin dev 新分支push到github

git branch  查看本地分支
git branch -r 查看远程分支
git branch -a 查看所有的分支

git branch d -r 删除本地分支
git branch 
git pull origin master
IEDA:VCS->Git->Push
            -> fecth->checkout->master
、、、