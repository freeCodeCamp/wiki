1. All code is written and pushed to a branch on the developers' own fork of Free Code Camp.
1. Developers create pull requests, pulling code from their branch to Free Code Camp's staging branch.
1. Someone other than the person who submitted the pull request QA's the pull request and accepts it if everything is perfect. Otherwise they close the pull request with an explanation of why it isn't perfect, and the developer opens another pull request once they've fixed things.
1. Staging is deployed to beta.freecodecamp.com by @berkeleytrue, @benmcmahon100 or @quincylarson periodically.
1. Master is deployed to freecodecamp.com once the staging itself is fully QA'd.

Notes: 
- Currently freecodecamp.com and beta.freecodecamp.com share a database, so we must be careful about seeding data and manipulating it on beta.
- This is subject to change once we get better test coverage and continuous integration working.