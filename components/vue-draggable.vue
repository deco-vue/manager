<template>
  <div class="mt-6 select-none">
    <div class="flex justify-between gap-3 p-2 shadow-xl rounded">
      <div class="border border-red-500 rounded-xl overflow-hidden w-full ">
        <h3 class="text-sm p-2 text-center text-white bg-red-500 w-full">Don't know</h3>
        <draggable class="text-sm m-2 h-full" animation="300" :list="list1" item-key="id" group="people" @change="log">
          <template #item="{ element }">
            <transition-group type="transition" tag="div">
              <div class="p-2 rounded mt-2 text-center border border-red-500 cursor-grab" :key="element.id">
                {{ element.name }}
              </div>
            </transition-group>
          </template>
        </draggable>
      </div>
      <div class="border border-orange-500 rounded-xl overflow-hidden w-full">
        <h3 class="text-sm p-2 text-center text-white bg-orange-500 w-frey">Want to learn</h3>
        <draggable class="text-sm m-2 h-full" animation="300" :list="list2" item-key="id" group="people" @change="log">
          <template #item="{ element }">
            <transition-group type="transition" tag="div">
              <div class="p-2 rounded mt-2 text-center border border-orange-500 cursor-grab" :key="element.id">
                {{ element.name }}
              </div>
            </transition-group>
          </template>
        </draggable>
      </div>
      <div class="border border-violet-500 rounded-xl overflow-hidden w-full">
        <h3 class="text-sm p-2 text-center text-white bg-violet-500 w-frey">Learning</h3>
        <draggable class="text-sm m-2 h-full" animation="300" :list="list3" item-key="id" group="people" @change="log">
          <template #item="{ element }">
            <transition-group type="transition" tag="div">
              <div class="p-2 rounded mt-2 text-center border border-violet-500 cursor-grab" :key="element.id">
                {{ element.name }}
              </div>
            </transition-group>
          </template>
        </draggable>
      </div>
      <div class="border border-green-500 rounded-xl overflow-hidden w-full">
        <h3 class="text-sm p-2 text-center text-white bg-green-500 w-fuey">Done</h3>
        <draggable class="text-sm m-2 h-full" animation="300" :list="list4" item-key="id" group="people" @change="log">
          <template #item="{ element }">
            <transition-group type="transition" tag="div">
              <div class="p-2 rounded mt-2 text-center border border-green-500 cursor-grab" :key="element.id">
                {{ element.name }}
              </div>
            </transition-group>
          </template>
        </draggable>
      </div>

    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable';

const list1 = ref([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 },
]);

const list2 = ref([
  { name: 'Juan', id: 5 },
  { name: 'Edgard', id: 6 },
  { name: 'Johnson', id: 7 },
]);

const list3 = ref([
  { name: 'Deco', id: 8 },
  { name: 'Aziz', id: 9 },
  { name: 'Karim', id: 10 },
]);

const list4 = ref([
  { name: 'Boss', id: 11 },
  { name: 'Sofy', id: 12 },
  { name: 'Angel', id: 13 },
]);

const add = () => {
  list1.value.push({ name: 'Juan' });
};

const replace = () => {
  list1.value = [{ name: 'Edgard' }];
};

const clone = (el) => {
  return {
    name: el.name + ' cloned',
  };
};

const log = (evt) => {
  console.log(evt);
};
</script>