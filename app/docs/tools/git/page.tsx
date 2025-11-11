'use client'

import {
  IconGitBranch,
  IconSettings,
  IconDeviceFloppy,
  IconFolder,
  IconGitCommit,
  IconGitCompare,
  IconGitMerge,
  IconGitPullRequest,
  IconGitFork,
  IconGitCherryPick,
  IconTag,
  IconTrash,
  IconFolderSymlink,
  IconCloudDownload,
  IconBrandGithub,
  IconUsers,
  IconHistory,
  IconEdit,
  IconFileSymlink,
  IconArrowBackUp,
  IconRestore,
  IconFiles,
  IconBoxMultiple,
  IconQuestionMark,
  IconSettings2,
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const core = [
  { title: 'What is Git', description: 'Distributed version control system for code tracking changes.', icon: <IconGitCommit />, link: 'git/1' },
  { title: 'Installation of Git', description: 'Steps to install Git on various operating systems.', icon: <IconSettings />, link: 'git/2' },
  { title: 'Git Configuration', description: 'Initial setup for Git with username and email.', icon: <IconSettings2 />, link: 'git/3' },
  { title: 'Understanding .git Folder', description: 'Contains all metadata and object history for project.', icon: <IconFolder />, link: 'git/4' },
  { title: 'Why Git Over Other VCS', description: 'Advantages of Git compared to traditional version control tools.', icon: <IconQuestionMark />, link: 'git/5' }
]

const repo = [
  { title: 'Creating Repository', description: 'Initialize a Git repository to start version control.', icon: <IconFolder />, link: 'git/6' },
  { title: 'Staging Area', description: 'Area where changes are prepared before committing.', icon: <IconFiles />, link: 'git/7' },
  { title: 'Making Commits', description: 'Record changes to the repository with commit messages.', icon: <IconGitCommit />, link: 'git/8' },
  { title: 'Viewing History', description: 'See previous commits and changes using Git log.', icon: <IconHistory />, link: 'git/9' },
  { title: 'Ignoring Files', description: 'Exclude files from tracking using .gitignore configuration.', icon: <IconTrash />, link: 'git/10' }
]

const branch = [
  { title: 'What is Branch', description: 'Branches let you diverge from main development line.', icon: <IconGitBranch />, link: 'git/12' },
  { title: 'Creating Branches', description: 'Generate new branches for features or experiments.', icon: <IconGitFork />, link: 'git/13' },
  { title: 'Switching Branches', description: 'Move between branches to manage development flow.', icon: <IconGitCompare />, link: 'git/14' },
  { title: 'Merging', description: 'Combine different branches into a single unified one.', icon: <IconGitMerge />, link: 'git/15' },
  { title: 'Fast Forward and others', description: 'Different merge behaviors depending on history divergence.', icon: <IconGitPullRequest />, link: 'git/16' },
  { title: 'Naming Conventions', description: 'Common conventions for clear and consistent branch naming.', icon: <IconEdit />, link: 'git/17' },
  { title: 'Deleting Branches', description: 'Clean up branches locally and on remote.', icon: <IconTrash />, link: 'git/18' }
]

const remote = [
  { title: 'Connecting to Github', description: 'Link local repo with GitHub using remote URL.', icon: <IconBrandGithub />, link: 'git/19' },
  { title: 'Syncing with Remote', description: 'Push and pull changes to and from remote.', icon: <IconGitPullRequest />, link: 'git/20' },
  { title: 'Cloning', description: 'Download full repository including history from GitHub.', icon: <IconCloudDownload />, link: 'git/21' },
  { title: 'Collaboration Workflow', description: 'Best practices for working in teams with Git.', icon: <IconUsers />, link: 'git/22' }
]

const undo = [
  { title: 'Discarding Changes', description: 'Navigate branches or undo changes safely.', icon: <IconRestore />, link: 'git/23' },
  { title: 'Resetting Commits', description: 'Move HEAD and optionally working directory backward.', icon: <IconArrowBackUp />, link: 'git/24' },
  { title: 'Reverting Commits', description: 'Undo changes by creating a new inverse commit.', icon: <IconGitCommit />, link: 'git/25' },
  { title: 'Amending Commits', description: 'Edit the most recent commit including message.', icon: <IconEdit />, link: 'git/26' },
  { title: 'Stashing', description: 'Temporarily save changes not ready to commit.', icon: <IconFileSymlink />, link: 'git/27' }
]

const advanced = [
  { title: 'Rebase', description: 'Move or combine commits to streamline history.', icon: <IconTag />, link: 'git/28' },
  { title: 'Tags', description: 'Mark specific commits as important release points.', icon: <IconTag />, link: 'git/29' },
  { title: 'Cherry Picking', description: 'Apply specific commit from one branch to another.', icon: <IconGitCherryPick />, link: 'git/30' },
  { title: 'Submodules', description: 'Include other repositories within your repository.', icon: <IconBoxMultiple />, link: 'git/31' },
  { title: 'Hooks', description: 'Automate tasks with scripts at specific Git events.', icon: <IconSettings />, link: 'git/32' },
  { title: 'Git Worktrees', description: 'Manage multiple working directories from one Git repo.', icon: <IconFolderSymlink />, link: 'git/33' }
]

export default function page() {
  return (
    <div className='bg-black p-10 py-32'>
      <h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#F05032] mb-4 flex items-center gap-3'>
        <img src="/icons/tools/git.svg" alt="Git Logo" className="w-10 h-10" />
        Git Docs
      </h1>
      <p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
        Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
        <br /><br />
        Creator: Linus Torvalds <a target='_blank' href='https://github.com/torvalds' className='text-neutral-500'>Profile</a>
        <br />
        <a target='_blank' href='https://github.com/git/git' className='text-violet-500'>GitHub Repo Link</a>
      </p>

      <p className="px-10">Core Concepts and Setup</p>
      <ScrollableFeatureRow features={core} />

      <p className="px-10">Repository and Commits</p>
      <ScrollableFeatureRow features={repo} />

      <p className="px-10">Branching and Merging</p>
      <ScrollableFeatureRow features={branch} />

      <p className="px-10">Remote Repositories</p>
      <ScrollableFeatureRow features={remote} />

      <p className="px-10">Undoing Changes</p>
      <ScrollableFeatureRow features={undo} />

      <p className="px-10">Advanced Concepts</p>
      <ScrollableFeatureRow features={advanced} />
    </div>
  )
}
