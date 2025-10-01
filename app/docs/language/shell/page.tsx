'use client'

import {
  IconTerminal2,
  IconHistory,
  IconSettings,
  IconFileCode,
  IconMessage,
  IconAlertTriangle,
  IconAdjustments,
  IconArrowsShuffle,
  IconHierarchy2,
  IconLoader2,
  IconFunction,
  IconCpu,
  IconBoxMultiple,
  IconDatabase,
  IconClock,
  IconShieldLock,
  IconRocket,
  IconLink,
  IconBug,
  IconListDetails,
  IconFileLambda,
  IconBolt,
  IconHash,
  IconHierarchy,
  IconCloudDownload,
} from '@tabler/icons-react'
import { ScrollableFeatureRow } from '@/components/ScrollableRow'

const intro = [
  { title: 'What is Shell', description: 'Command-line interpreter and scripting language for automation.', icon: <IconTerminal2 />, link: 'shell/1' },
  { title: 'History of Shell', description: 'Developed for Unix systems; Bash is the most popular shell.', icon: <IconHistory />, link: 'shell/2' },
  { title: 'First Script', description: 'Write and execute your first Shell script (Hello World).', icon: <IconFileCode />, link: 'shell/3' },
  { title: 'Terminal Basics', description: 'Navigating, commands, and executing scripts.', icon: <IconSettings />, link: 'shell/4' },
]

const commands = [
  { title: 'File & Directory Commands', description: 'ls, cd, pwd, mkdir, rm, mv, cp', icon: <IconAdjustments />, link: 'shell/5' },
  { title: 'Viewing & Editing Files', description: 'cat, less, head, tail, nano, vim', icon: <IconLoader2 />, link: 'shell/6' },
  { title: 'Permissions & Ownership', description: 'chmod, chown, chgrp', icon: <IconShieldLock />, link: 'shell/7' },
  { title: 'Process Management', description: 'ps, top, kill', icon: <IconCpu />, link: 'shell/8' },
  { title: 'System Info Commands', description: 'df, du, uptime, whoami, uname', icon: <IconFunction />, link: 'shell/9' },
]

const variables = [
  { title: 'Variables', description: 'Defining and using variables in scripts.', icon: <IconAdjustments />, link: 'shell/10' },
  { title: 'Special Variables', description: '$0, $1, $#, $@, $?', icon: <IconHash />, link: 'shell/11' },
  { title: 'Environment Variables', description: 'PATH, HOME, USER, etc.', icon: <IconRocket />, link: 'shell/12' },
  { title: 'Reading Input', description: 'Using read to take input from users.', icon: <IconMessage />, link: 'shell/13' },
]

const controlFlow = [
  { title: 'Conditionals', description: 'if, else, elif, case statements', icon: <IconHierarchy2 />, link: 'shell/14' },
  { title: 'Loops', description: 'for, while, until loops', icon: <IconLoader2 />, link: 'shell/15' },
  { title: 'Loop Control', description: 'break, continue', icon: <IconArrowsShuffle />, link: 'shell/16' },
  { title: 'Exit Status & Tests', description: '[ ], [[ ]], test commands', icon: <IconAlertTriangle />, link: 'shell/17' },
]

const functionsScripts = [
  { title: 'Functions', description: 'Defining and using functions in scripts.', icon: <IconFunction />, link: 'shell/18' },
  { title: 'Script Modularity', description: 'Sourcing scripts using source / .', icon: <IconFileLambda />, link: 'shell/19' },
  { title: 'Arguments & Return Values', description: 'Passing arguments and returning values from functions.', icon: <IconLink />, link: 'shell/20' },
]

const fileText = [
  { title: 'Redirection & Pipes', description: '>, >>, <, |, command chaining', icon: <IconArrowsShuffle />, link: 'shell/21' },
  { title: 'Filters', description: 'grep, awk, sed, cut, sort, uniq', icon: <IconBolt />, link: 'shell/22' },
  { title: 'Pattern Matching', description: 'Wildcards: *, ?, [ ]', icon: <IconHierarchy />, link: 'shell/23' },
]

const advanced = [
  { title: 'Arrays & Subshells', description: 'Using arrays and subshells in scripts', icon: <IconBoxMultiple />, link: 'shell/24' },
  { title: 'Here Documents & Strings', description: 'Using <<, <<< for input redirection', icon: <IconFileCode />, link: 'shell/25' },
  { title: 'Background Jobs', description: '& , jobs, fg, bg', icon: <IconClock />, link: 'shell/26' },
  { title: 'Trap & Signals', description: 'Handling signals using trap', icon: <IconAlertTriangle />, link: 'shell/27' },
]

const automation = [
  { title: 'Cron Jobs', description: 'Scheduling scripts using cron', icon: <IconSettings />, link: 'shell/28' },
  { title: 'Logging & Debugging', description: 'set -x, set -e, script debugging', icon: <IconBug />, link: 'shell/29' },
  { title: 'Backup & Archiving', description: 'tar, gzip, zip, rsync', icon: <IconDatabase />, link: 'shell/30' },
  { title: 'Networking Commands', description: 'ping, curl, wget, scp', icon: <IconCloudDownload />, link: 'shell/31' },
]

const security = [
  { title: 'Permissions & Access Control', description: 'Managing permissions safely', icon: <IconShieldLock />, link: 'shell/32' },
  { title: 'Input Validation & Quoting', description: 'Avoid code injection and errors', icon: <IconAlertTriangle />, link: 'shell/33' },
]

const tools = [
  { title: 'Editors & Shells', description: 'Vim, Nano, Zsh, Oh My Zsh', icon: <IconListDetails />, link: 'shell/34' },
  { title: 'Monitoring & Debugging', description: 'top, lsof, strace', icon: <IconClock />, link: 'shell/35' },
  { title: 'Package Managers', description: 'apt, yum, brew', icon: <IconRocket />, link: 'shell/36' },
]

export default function Page() {
  return (
    <div className='bg-black p-10 py-32'>
      <h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#89e051] mb-4 flex items-center gap-3'>
        <img src="/icons/langs/sh.svg" alt="Shell Logo" className="w-10 h-10" />
        &nbsp;Shell Docs
      </h1>
      <p className='text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
        Shell scripting is a command-line programming language used to automate tasks, manage files, processes, and system administration on Unix/Linux systems.
        <br /><br />
        Creator: Stephen Bourne (Bourne Shell)
        <br />
        <a target='_blank' href='https://github.com/bminor/bash' className='text-violet-500'>Official Bash Link</a>
      </p>


      <p className="px-10">Introduction to Shell</p>
      <ScrollableFeatureRow features={intro} />

      <p className="px-10">Basic Commands</p>
      <ScrollableFeatureRow features={commands} />

      <p className="px-10">Variables & Input</p>
      <ScrollableFeatureRow features={variables} />

      <p className="px-10">Control Flow</p>
      <ScrollableFeatureRow features={controlFlow} />

      <p className="px-10">Functions & Scripts</p>
      <ScrollableFeatureRow features={functionsScripts} />

      <p className="px-10">File Manipulation & Text Processing</p>
      <ScrollableFeatureRow features={fileText} />

      <p className="px-10">Advanced Shell Scripting</p>
      <ScrollableFeatureRow features={advanced} />

      <p className="px-10">Automation & System Tasks</p>
      <ScrollableFeatureRow features={automation} />

      <p className="px-10">Security & Best Practices</p>
      <ScrollableFeatureRow features={security} />

      <p className="px-10">Tools & Ecosystem</p>
      <ScrollableFeatureRow features={tools} />
    </div>
  )
}
