import test from 'node:test';
import assert from 'node:assert/strict';
import {slug} from '../src/slug.js';
test('single word',()=>assert.equal(slug(' Hello '),'hello'));
test('two words',()=>assert.equal(slug('Hello World'),'hello-world'));
test('all whitespace groups',()=>assert.equal(slug('  Draft   status\tupdate  '),'draft-status-update'));
