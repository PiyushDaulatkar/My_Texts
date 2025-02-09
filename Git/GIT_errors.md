# Git Errors

## fatal: unable to access 'https://github.com/PiyushDaulatkar/My_Texts.git/': The requested URL returned error: 403
* generate token with all checkboxes checked.
* use command `git remote set-url origin https://<token>@github.com/<username>/<repo>`.
<br></br><hr>

# git: 'credential-osxkeychain' is not a git command. See 'git --help'.
Password for '
bnm': 
git: 'credential-osxkeychain' is not a git command. See 'git --help'.
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/PiyushDaulatkar/My_Texts/'

* Means git token is expired and you need to change it with new one.
<br></br><hr>

## after `git pull origin main`
```
From https://github.com/TechCommunity-debug/angular-lessons
 * branch            main       -> FETCH_HEAD
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
```

* The error message you're seeing indicates that your local main branch has diverged from the remote main branch. This means that both the remote and local branches have commits that the other doesn't, and Git doesn't know how to reconcile them.

### Solution
* **Merge (Default Strategy)**:
  * Git can merge the remote changes into your local branch. This will create a new merge commit to combine both branches.
```git
git config pull.rebase false
git pull origin main
```

<br></br>

<br></br>
