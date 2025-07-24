/* eslint-disable @typescript-eslint/no-unused-vars */
export async function getCategories() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/categories`,
    );

    const data = await response.json();

    return data.categories;
  } catch (error: unknown) {
    return [];
  }
}
