import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import { useRouter } from 'next/router'

export default function Home() {
const router = useRouter();

  return (
 <div>
  <h1>
    Lesson 1: Variables
  </h1>
  <p>
    Variables are used to store values that can be used throughout your code.
  </p>
  <p>
    Example: <code>const myVariable = 'Hello World'</code>
  </p>
  <button type="button" onClick={() => router.push('/quiz')} >
    Quiz
  </button>
 </div>
  )
}
