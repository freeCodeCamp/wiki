## Issue Moderators
GitHub Issue Moderators, or "issue mods", are volunteers who have the ability to close issues and accept or deny pull requests.

Navigate to [Becoming an Issue Mod](#becoming-an-issue-mod) if you are interested in becoming an Issue Moderator on GitHub.

### Table of Contents

- [Responsibilities](#responsibilities)
- [Issue Moderation](#issue-moderation)
- [Pull Request Moderation](#pull-request-moderation)
- [PR Requirements and Formatting](#pr-requirements-and-formatting)
- [Quality Assurance (QA)](#quality-assurance-qa)
- [Special Requirements](#special-requirements)
- [Take Care](#take-care)
- [Becoming an Issue Mod](#becoming-an-issue-mod)
- [Additional Requirements](#additional-requirements)
- [Activity Requirement](#activity-requirement)

### Responsibilities
Issue Mods have two primary responsibilities:

1. Evaluating and responding to Issues
2. QAing and Merging Pull Requests

### Issue Moderation
Free Code Camp is an active open source project.  We get many tens of issues a day, all of which need to be triaged and labeled.

There are several general classes of Issues:

1. **Code Help Requests**
Help Requests are not appropriate for Issues.  Do not provide code support in your response, gently point the user to the appropriate Help Chat, and close the issue.
2. **Bug or Clarification issues**
Confirm or validate the bug if possible.  Seek additional clarification or details if needed.  Once the issue has been reproduced or at least deemed legitimate, label it `confirmed`.
    * If it's a simple change to an existing challenge, flag as `help wanted` and, optionally, as `easy`.  Use other tags as appropriate.
    * If the issue is more significant, flag as `bug`
    * [Label Usage Guide](Select-Issues-for-Contributing-Using-Labels)

    If there is a question as to the proper course of action on an issue, feel free to tag @FreeCodeCamp/issue-moderators to give an opinion.  Flag as `Discussing`.
3. **Duplicate Issues**
If an issue is the same as another reported issue, the prior reported issue should take precedence.  Link to the other issue with #XXXX, where XXXX is the issue number and close the issue.
4. **Bike Shedding**
Bike Shedding is an example of [Parkinson's law of triviality](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality).  Some issues are simply not worth fixing.  If you believe an issue is just a waste of time, flag as such and close.

### Pull Request Moderation
Pull Requests (PRs) are how contributors to Free Code Camp submit changes to the repository for consideration.  It is important that these PRs are properly formatted and undergo thorough Quality Assurance Testing prior to being merged.

### PR Requirements and Formatting
PRs must meet the following requirements:

1. Must be against the `staging` branch
2. Must be from a properly named non-staging branch on the user's fork
3. Title must clearly identify the affected area/change made
4. Title should NOT have an issue number in it
5. Body of the PR should give details about the change as well as level of testing (IE: untested, tested locally)
6. If the PR is in response to an open issue or issues, the body should also include `closes #XXXX` for each issue number closed
7. Change should only have 1 commit
8. Code should pass all tests and linting
9. Code should be of general high quality and a needed change or improvement

If the issue does not meet one or more of these requirements, note the deficiencies in a comment and/or highlight lines.  New Contributors may be referred to the [HelpContributors](https://gitter.im/FreeCodeCamp/HelpContributors) Chat room.  At at the Mod's discretion the issue may be closed.

### Quality Assurance (QA)
Assuming that the basic requirements for the PR are met, all PRs should undergo some level of Quality Assurance testing.  The most basic QA is to simply checkout the PR on a local copy of the site and test the changed functionality.  Be sure to read through the code changes and understand what the potential side effects are. Exercise code and corner cases.  Be sure to try both negative and positive test cases.

If there is any doubt about the functionality, ask for the @FreeCodeCamp/issue-moderators to also take look.

For larger PRs, tag in [@BerkeleyTrue](https://gitter.im/berkeleytrue).  In some cases it may make sense to test on the beta site.

### Special Requirements
PRs which change the underlying function of the site or make non-trivial changes to the UI or UX of the site should be approved by [@BerkeleyTrue](https://gitter.im/berkeleytrue) or [@QuincyLarson](https://gitter.im/quincylarson).  If you have any doubt, tag them in a comment and/or draw their attention to the PR via Gitter Chat.

### Take Care
Though you will have write access to Free Code Camp's repository, **you should never write directly to the Free Code Camp repository**. All code should enter Free Code Camp's codebase in the form of a pull request.

### Becoming an Issue Mod
In order to become an issue mod, you must first prove your helpfulness by leaving useful comments on outstanding issues, and submitting pull requests of your own to fix these issues.

If you've been doing these things, and want the additional power/responsibility that comes with helping Free Code Camp as an issue mod, please contact [@BerkeleyTrue](https://gitter.im/berkeleytrue) in Gitter.

If you are approved, we will add you to a GitHub Team, Issue mods.

The number of issue moderators will always remain small due to the nature of Github permissions.

### Additional Requirements
* Two Factor Authentication enabled on your GitHub account
* Profile Name set to at least your first name
* Non-Default Profile Image set on GitHub

### Activity Requirement
Please note that we will frequently remove issue mods whom we think are inactive. If you are removed, please do not take this personally - we can add you back to the team, just message us and let us know you're still active.
