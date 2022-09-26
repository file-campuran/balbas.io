import React from 'react'

const themes = ['light', 'dark']
import clsx from 'clsx'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }

//   // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'

//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'

//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')


export default function ThemeToggle() {
    return <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
        {themes.map(t => {
            // const checked = t === them
            return <button key={t}
            className={clsx('cursor-pointer rounded-3xl p-2 bg-white text-black', )}
             >
                <Sun />
                <Moon />

            </button>
        })}
    </div>
}
