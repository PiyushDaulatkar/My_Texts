# Git and GitHub
<br></br>
## Structure
### Working Directory  >|<  Staging Area  >|<  Local Repository  >|<  Central/Remote Repository
ex: people in wedding >|< people go to stage to take photo >|< photo taken >|< photo uploaded on google drive

<br></br>
## git init
## git add . or name(s) of file(s)
## git commit -m "message"
<br></br>

## git status
## git log
* To get the history of commits.

<br></br>
## git restore --staged demo.txt
* To remove/revert changes from the staging area.
  ### getting Errors
* This will give an error if no commits are done, so at least one commit should done before using this command.
<br></br>

## git reset <commit hash>
* It's commonly used to undo changes.
* To remove changes from the local repository. 
* use ***--hard*** to discard all changes and move the HEAD to the specified commit. If you only want to move the HEAD without discarding changes, you can use git reset ***--soft***.
<br></br>

## git stash
* If you ***don't want to commit*** and also ***don't want to lose those changes***.
* eg. take a photo of wedding guests and make them go backstage.
  ### guide
  * use this after git add.
<br></br>
  ## git stash pop
  * The git stash pop command is used to apply the most recently stashed changes and remove them from the stash.
  * When you run git stash pop, Git will take the most recent set of stashed changes (the one on top of the stash stack), apply those changes to your working directory and staging area, and then remove that stash from the stash stack.
<br></br>

<br></br>

<br></br>

<br></br>

<br></br>

<br></br>

<br></br>
