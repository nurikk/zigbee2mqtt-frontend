import { ChangeEvent, useState } from 'react'
type KVP = { [key: string]: string };
export const useInputChange = (initialState: KVP) => {
  const [input, setInput] = useState<KVP>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return [input, handleInputChange]
}