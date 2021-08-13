import js from '~/assets/images/javascript.png'
import clogo from '~/assets/images/clogo.png'
import cpplogo from '~/assets/images/c++logo.png'
import java from '~/assets/images/java.png'

import html from '~/assets/images/html.png'
import css from '~/assets/images/css.png'

import vuejs from '~/assets/images/vue.png'
import nuxt from '~/assets/images/nuxt-js.png'
import react from '~/assets/images/react.png'
import redux from '~/assets/images/redux.png'
import vuex from '~/assets/images/vuex.png'

import boostrap from '~/assets/images/boostrap.png'
import tailwind from '~/assets/images/tailwind.png'
import materialui from '~/assets/images/material-ui.svg'
import elementui from '~/assets/images/element-ui.svg'
import sass from '~/assets/images/sass.png'

import firebase from '~/assets/images/firebase.png'
import graphql from '~/assets/images/graphql.png'

import git from '~/assets/images/git.png'

import vscode from '~/assets/images/vscode.png'
import slack from '~/assets/images/slack.svg'

const SkillSet = [
  {
    id: 1,
    title: 'languages',
    technologies: [
      { name: 'JavaScript', icon: js },
      { name: 'C', icon: clogo },
      { name: 'C++', icon: cpplogo },
      { name: 'Java', icon: java },
    ],
  },
  {
    id: 2,
    title: 'Web',
    technologies: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
    ],
  },
  {
    id: 3,
    title: 'javascript framework',
    technologies: [
      { name: 'VueJs', icon: vuejs },
      { name: 'React', icon: react },
      { name: 'Redux', icon: redux },
      { name: 'Vuex', icon: vuex },
    ],
  },
  {
    id: 4,
    title: 'css framework',
    technologies: [
      { name: 'Boostrap', icon: boostrap },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Material UI', icon: materialui },
      { name: 'Element UI', icon: elementui },
      { name: 'Sass', icon: sass },
    ],
  },
  {
    id: 5,
    title: 'database/auth/query/language',
    technologies: [
      { name: 'Firebase', icon: firebase },
      { name: 'GraphQL', icon: graphql },
    ],
  },
  {
    id: 6,
    title: 'version control',
    technologies: [{ name: 'Git', icon: git }],
  },
  {
    id: 7,
    title: 'utilities',
    technologies: [
      { name: 'VSCode', icon: vscode },
      { name: 'Slack', icon: slack },
    ],
  },
]

export default SkillSet
