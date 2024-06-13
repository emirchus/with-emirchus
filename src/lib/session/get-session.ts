'use server';

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

import { SessionData, sessionOptions } from '@/lib/session';

export async function getSession() {
  return getIronSession<SessionData>(cookies() as never, sessionOptions);
}
