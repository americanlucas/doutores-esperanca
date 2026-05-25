"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  Plus,
  Calendar,
  Clock,
  MapPin,
  Users,
  Edit,
  Trash2,
  Search,
  Building2,
  CheckCircle,
  XCircle,
} from "lucide-react"

interface Shift {
  id: string
  date: string
  startTime: string
  endTime: string
  hospital: string
  address: string
  type: "canto" | "visita" | "oracao"
  maxVolunteers: number
  currentVolunteers: number
  volunteers: { id: string; name: string; status: "confirmado" | "pendente" | "cancelado" }[]
  status: "aberto" | "lotado" | "realizado" | "cancelado"
  notes: string
}

const hospitals = [
  { id: "1", name: "Hospital Santa Lúcia Sul", address: "SHLS 716" },
  { id: "2", name: "Hospital Santa Lúcia Norte", address: "SHLN 716" },
  { id: "3", name: "Hospital de Base", address: "SMHS Q 101" },
  { id: "4", name: "Hospital Brasília", address: "SGAS 613" },
  { id: "5", name: "Hospital Anchieta", address: "QNG AE 02" },
]

const initialShifts: Shift[] = [
  {
    id: "1",
    date: "2026-06-20",
    startTime: "08:00",
    endTime: "12:00",
    hospital: "Hospital Santa Lúcia Sul",
    address: "SHLS 716",
    type: "canto",
    maxVolunteers: 6,
    currentVolunteers: 4,
    volunteers: [
      { id: "1", name: "Maria Silva", status: "confirmado" },
      { id: "2", name: "João Santos", status: "confirmado" },
      { id: "3", name: "Ana Costa", status: "pendente" },
      { id: "4", name: "Pedro Lima", status: "confirmado" },
    ],
    status: "aberto",
    notes: "Levar hinários e instrumentos",
  },
  {
    id: "2",
    date: "2026-06-20",
    startTime: "14:00",
    endTime: "18:00",
    hospital: "Hospital Santa Lúcia Norte",
    address: "SHLN 716",
    type: "visita",
    maxVolunteers: 4,
    currentVolunteers: 2,
    volunteers: [
      { id: "5", name: "Carla Oliveira", status: "confirmado" },
      { id: "6", name: "Lucas Mendes", status: "pendente" },
    ],
    status: "aberto",
    notes: "",
  },
  {
    id: "3",
    date: "2026-06-22",
    startTime: "08:00",
    endTime: "12:00",
    hospital: "Hospital de Base",
    address: "SMHS Q 101",
    type: "canto",
    maxVolunteers: 5,
    currentVolunteers: 5,
    volunteers: [
      { id: "1", name: "Maria Silva", status: "confirmado" },
      { id: "3", name: "Ana Costa", status: "confirmado" },
      { id: "7", name: "Roberto Alves", status: "confirmado" },
      { id: "8", name: "Fernanda Lima", status: "confirmado" },
      { id: "9", name: "Gustavo Reis", status: "confirmado" },
    ],
    status: "lotado",
    notes: "Evento especial - dia do paciente",
  },
  {
    id: "4",
    date: "2026-06-15",
    startTime: "08:00",
    endTime: "12:00",
    hospital: "Hospital Brasília",
    address: "SGAS 613",
    type: "oracao",
    maxVolunteers: 4,
    currentVolunteers: 4,
    volunteers: [
      { id: "1", name: "Maria Silva", status: "confirmado" },
      { id: "2", name: "João Santos", status: "confirmado" },
      { id: "3", name: "Ana Costa", status: "confirmado" },
      { id: "4", name: "Pedro Lima", status: "confirmado" },
    ],
    status: "realizado",
    notes: "",
  },
]

export default function PlantoesPage() {
  const [shifts, setShifts] = useState<Shift[]>(initialShifts)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("todos")
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null)
  const [newShift, setNewShift] = useState({
    date: "",
    startTime: "",
    endTime: "",
    hospital: "",
    type: "canto" as const,
    maxVolunteers: 4,
    notes: "",
  })

  const filteredShifts = shifts.filter((shift) => {
    const matchesSearch =
      shift.hospital.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === "todos" || shift.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleCreateShift = () => {
    const hospital = hospitals.find((h) => h.id === newShift.hospital)
    if (!hospital) return

    const shift: Shift = {
      id: Date.now().toString(),
      date: newShift.date,
      startTime: newShift.startTime,
      endTime: newShift.endTime,
      hospital: hospital.name,
      address: hospital.address,
      type: newShift.type,
      maxVolunteers: newShift.maxVolunteers,
      currentVolunteers: 0,
      volunteers: [],
      status: "aberto",
      notes: newShift.notes,
    }
    setShifts([...shifts, shift])
    setNewShift({
      date: "",
      startTime: "",
      endTime: "",
      hospital: "",
      type: "canto",
      maxVolunteers: 4,
      notes: "",
    })
    setIsCreateOpen(false)
  }

  const handleDeleteShift = (id: string) => {
    setShifts(shifts.filter((s) => s.id !== id))
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "canto":
        return <Badge className="bg-purple-100 text-purple-700">Canto</Badge>
      case "visita":
        return <Badge className="bg-blue-100 text-blue-700">Visita</Badge>
      case "oracao":
        return <Badge className="bg-orange-100 text-orange-700">Oração</Badge>
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "aberto":
        return <Badge className="bg-green-100 text-green-700">Aberto</Badge>
      case "lotado":
        return <Badge className="bg-blue-100 text-blue-700">Lotado</Badge>
      case "realizado":
        return <Badge className="bg-gray-100 text-gray-600">Realizado</Badge>
      case "cancelado":
        return <Badge className="bg-red-100 text-red-700">Cancelado</Badge>
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
      full: date.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Plantões</h1>
          <p className="text-gray-500">
            Crie e gerencie vagas de plantões para os voluntários
          </p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Novo Plantão
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Criar Novo Plantão</DialogTitle>
              <DialogDescription>
                Disponibilize uma nova vaga de plantão para inscrição dos voluntários
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="hospital">Hospital</Label>
                <Select
                  value={newShift.hospital}
                  onValueChange={(value) => setNewShift({ ...newShift, hospital: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o hospital" />
                  </SelectTrigger>
                  <SelectContent>
                    {hospitals.map((hospital) => (
                      <SelectItem key={hospital.id} value={hospital.id}>
                        {hospital.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="date"
                  value={newShift.date}
                  onChange={(e) => setNewShift({ ...newShift, date: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Horário Início</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={newShift.startTime}
                    onChange={(e) =>
                      setNewShift({ ...newShift, startTime: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">Horário Fim</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={newShift.endTime}
                    onChange={(e) =>
                      setNewShift({ ...newShift, endTime: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de Atividade</Label>
                  <Select
                    value={newShift.type}
                    onValueChange={(value: "canto" | "visita" | "oracao") =>
                      setNewShift({ ...newShift, type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="canto">Canto</SelectItem>
                      <SelectItem value="visita">Visita</SelectItem>
                      <SelectItem value="oracao">Oração</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxVolunteers">Vagas</Label>
                  <Input
                    id="maxVolunteers"
                    type="number"
                    min={1}
                    max={20}
                    value={newShift.maxVolunteers}
                    onChange={(e) =>
                      setNewShift({ ...newShift, maxVolunteers: parseInt(e.target.value) })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Observações</Label>
                <Textarea
                  id="notes"
                  value={newShift.notes}
                  onChange={(e) => setNewShift({ ...newShift, notes: e.target.value })}
                  placeholder="Informações adicionais sobre o plantão..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                Cancelar
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleCreateShift}
              >
                Criar Plantão
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {shifts.filter((s) => s.status === "aberto").length}
                </p>
                <p className="text-sm text-gray-500">Abertos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {shifts.filter((s) => s.status === "lotado").length}
                </p>
                <p className="text-sm text-gray-500">Lotados</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {shifts.filter((s) => s.status === "realizado").length}
                </p>
                <p className="text-sm text-gray-500">Realizados</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {shifts.reduce((acc, s) => acc + s.currentVolunteers, 0)}
                </p>
                <p className="text-sm text-gray-500">Inscritos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar por hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["todos", "aberto", "lotado", "realizado"].map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(status)}
              className={
                statusFilter === status
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : ""
              }
            >
              {status === "todos" ? "Todos" : status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Shifts List */}
      <div className="space-y-4">
        {filteredShifts.map((shift) => {
          const dateInfo = formatDate(shift.date)
          return (
            <Card key={shift.id} className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[60px] p-3 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900">{dateInfo.day}</p>
                    <p className="text-xs text-gray-500 uppercase">{dateInfo.month}</p>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{shift.hospital}</h3>
                      {getTypeBadge(shift.type)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {shift.startTime} - {shift.endTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {shift.address}
                      </span>
                    </div>
                    {shift.notes && (
                      <p className="text-sm text-gray-400 mt-1">{shift.notes}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {shift.currentVolunteers}/{shift.maxVolunteers} vagas
                      </p>
                      <Progress
                        value={(shift.currentVolunteers / shift.maxVolunteers) * 100}
                        className="h-2 w-24 mt-1"
                      />
                    </div>

                    {getStatusBadge(shift.status)}

                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedShift(shift)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDeleteShift(shift.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Volunteers List */}
                {shift.volunteers.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Voluntários Inscritos:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {shift.volunteers.map((volunteer) => (
                        <Badge
                          key={volunteer.id}
                          variant="outline"
                          className={
                            volunteer.status === "confirmado"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : volunteer.status === "pendente"
                              ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }
                        >
                          {volunteer.status === "confirmado" && (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          )}
                          {volunteer.status === "cancelado" && (
                            <XCircle className="w-3 h-3 mr-1" />
                          )}
                          {volunteer.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredShifts.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum plantão encontrado
          </h3>
          <p className="text-gray-500 mb-4">
            Não encontramos plantões com os critérios de busca informados.
          </p>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => setIsCreateOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Criar Primeiro Plantão
          </Button>
        </div>
      )}
    </div>
  )
}
