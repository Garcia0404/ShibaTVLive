import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function Subscription() {
  return (
    <section id="subscription" className="pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center flex flex-col gap-6">
        <p className="text-white">¿Quieres ver ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Shiba TV Live.</p>
        <div className="flex w-full items-center justify-center gap-2">
            <Input
              type="email"
              placeholder="Email"
              className="text-white rounded-sm border-white/40 bg-white/10 py-7 max-w-150"
            />
            <Button
              type="submit"
              variant="default"
              className="cursor-pointer px-8 py-7 hover:bg-red-500 bg-main text-white text-2xl rounded-sm"
            >
              Comenzar
            </Button>
          </div>
      </div>
    </section>
  )
}
