import '../styles/styles.css';

if (module.hot) {
  module.hot.accept();
}

/*
  Git and git commands:-  

  git branch :- it will list all branches present 
  git status :- 
  git add <file-name> or
  git add -A (to add all files to the staging area)
  git reset <file-name>  :- remove a file from staging area(ie unstage)
  git commit -m "some content"
  git branch <new-branch-name> :- for creating new branches
  git checkout <branch-name>  :- to jump to that branch we want to go to
  git merge <branch-name>  :- 'branch-name' we want to merge (combine branches with  'master')
  git merge <branch-name> --no-ff  :-  (then after hit enter, hit esc  and type type :wq and press enter)
  git push origin master 
  git commit -am "<commit message>"  :-  stage and commit in one move
  git push origin <branch-name>  :- it pushes to the "branch-name" specified (not the master branch in this case)
  git pull origin master
  git branch -d <branch-name>  :-  to delete a branch 
  git checkout -b <branch-name>  :- create a branch and jump to the new branch in one move
  

*/
