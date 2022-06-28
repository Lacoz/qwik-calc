import { useStore, component$, Host } from '@builder.io/qwik';

export const addNr = (number: number, state: object) => {
  state.value += number;
}


export const App = component$(() => {
  const state = useStore({ value: '' });
  return (
    <Host class="calculator">
        <input class="entry" type="text" value={state.value}  />
        
        <button class="nr" onClick$={() => addNr(7, state)} >7</button>
        <button class="nr" onClick$={() => addNr(8, state)} >8</button>
        <button class="nr" onClick$={() => addNr(9, state)} >9</button>
        <button class="op" >/</button>
        <button class="nr" onClick$={() => addNr(4, state)} >4</button>
        <button class="nr" onClick$={() => addNr(5, state)} >5</button>
        <button class="nr" onClick$={() => addNr(6, state)} >6</button>
        <button class="op" >*</button>
        <button class="nr" onClick$={() => addNr(1, state)} >1</button>       
        <button class="nr" onClick$={() => addNr(2, state)} >2</button>
        <button class="nr" onClick$={() => addNr(3, state)} >3</button>       
        <button class="op" >-</button>
        <button class="nr" onClick$={() => addNr(0, state)} >0</button>
        <button class="decpoint">,</button>
        <button class="op" >+</button>
        <button class="equals">=</button>
    </Host>
  );
});
