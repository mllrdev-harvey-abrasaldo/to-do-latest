import { ref } from "vue";

export default function useCategory() {
  let id: 0
  const categoryInput = ref("");
  const categories = ref<string[]>([]);

  const createCategory = () => {
    if (categoryInput.value == ""){
      alert("Please Enter Category")
    }
    else{
      categories.value.push(categoryInput.value);
      categoryInput.value = ""
    }

  };

  return { categoryInput, categories, createCategory };
}
