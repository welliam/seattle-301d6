# MVC blog

Work with the provided starter code to add structure and functionality a basic Blog web site.

The code has some unfinished features. Your help is needed to complete it!

Search through the code for:

 `// TODO: ...`

 comments, where features should be. Replace the comments and any related pseudo-code with real, working code.

Work in pairs. Take turns as "driver" and "navigator".

## Getting started with pair programming

Take a moment to shake hands and introduce yourselves.

You and your pair will have different experience levels, which is normal. You'll have opportunities to both teach and learn from your pair. Keep an open mind, and always be kind.

The workflow may take a little getting used to, if you haven't done pairing before, so give yourself time to work through any git issues (aka: "gituations") that arise.

## Setup your repo

Here is a recommended workflow:

1. Driver: fork this repository to your own account. This original repo (the one at `github.com/codefellows`) is the "upstream" repo.
1. Your **forked repo** on GitHub will be your "origin" repo. Clone YOUR FORK to your local development environment (we suggest cloning into a new directory named "301" - `mkdir 301/` - which will be your parent 301 directory and set you up for organizational success!).
1. Use this command in the root of your forked repo, so that it knows about the upstream repo:
  - `git remote add upstream git-url-here`
  - (replace `git-url-here` with the proper git-URL of the codefellows upstream repo).
1. Now, you can sync changes from the upstream repo to your local master branch whenever you need them (do this at least daily):
  - `git pull upstream master`

## Write code together

Now find those `TODO` items in the code, and tackle one of them.

1. Driver: In your terminal, change directory into the `pair-assignment` folder.
1. Copy the starter code folder to a new folder named for your pair:
 - `cp -r starter-code/ sabrina-chris/`
1. Now cd into that new pairs name folder. This is where you will write code.
1. Type `atom .` to open the new folder as a project in Atom.
1. Use the Atom "Find in Project" feature to locate all the TODO items.
1. Work through one or two TODO items, testing your code as you go, until you are happy with how it's working.
1. In your terminal type `git status` to view the files that you have changed. You should only see the files that you have worked on.
1. Type `git add file1 file2` where file1, file2, etc. are the files that you have changed.
1. Type `git status` to view the files that have been added to your commit. You should only see the files that you worked on.
1. Type `git diff --staged` to view the differences between the previous version and the staged version of your file.
1. Type `git commit -m "Some meaningful message"` where Some meaningful message is a message that explains your commit.
1. Type `git status` to make sure there is nothing to commit.
1. Type `git push origin class-01` to push the class-01 branch changes to your forked repo on GitHub.

## Switch roles
1. Driver: On GitHub, Add your navigator as a collaborator to your origin repo.
1. Navigator: You can now clone the driver's fork, to your own local dev environment (if you haven't already, create a main "301" directory that will be the parent directory for your own forked repo, and a "navigator" directory created within this main "301" directory - **not your repo directory** - that will now contain your partner's repo, and future partner repos). Since you are now a collaborator, you can `pull` and `push` changes to and from `orgin`.
1. Switch roles: The new driver now opens the code in Atom (see above), and has hands on the keyboard to work through the next one or two TODO items.

## Submit your assignment

When you are finished with your work (or if time runs out), then submit your work. To do this, you'll create a "Pull Request" (aka: "PR") to the upstream repo with your changes, and submit that PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your `origin` repo.
2. Visit the origin repo on github.com.
1. Create a new PR.
1. Carefully review the PR, and ensure the code is going back to the upstream repo.
1. Write a good descriptive summary of your changes:
  - Be sure to include how much time you spent on it, and who you worked with.
  - Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.
