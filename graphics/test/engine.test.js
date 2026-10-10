import test from 'node:test';import assert from 'node:assert/strict';import {hashSeed,rng,pickWeighted,selectTraits,metadata} from '../src/engine.js';
const manifest={seed:'seed',name:'Demo',description:'Example',layers:[{name:'body',assets:[{name:'a',weight:1,src:'a.png'},{name:'b',weight:2,src:'b.png'}]}]};
test('determinism',()=>assert.deepEqual(selectTraits(manifest,4),selectTraits(manifest,4)));
test('seed stable',()=>assert.equal(hashSeed('hello'),hashSeed('hello')));
test('weighted pick',()=>assert.equal(pickWeighted([{name:'one',weight:1}],rng(3)).name,'one'));
test('metadata standard',()=>assert.equal(metadata(manifest,4,selectTraits(manifest,4),'ipfs://abc').attributes.length,1));
