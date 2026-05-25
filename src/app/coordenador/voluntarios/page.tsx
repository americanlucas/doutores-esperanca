"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/UI/Styled-Components/card"
import { Button } from "../../../components/UI/Styled-Components/button"
import { Input } from "../../../components/UI/Styled-Components/input"
import { Badge } from "../../../components/UI/Styled-Components/badge"
import { Progress } from "../../../components/UI/Styled-Components/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/UI/Styled-Components/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/UI/Styled-Components/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/UI/Styled-Components/tabs"
import {
  Search,
  Users,
  Phone,
  Mail,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Download,
} from "lucide-react"

interface Volunteer {
  id: string
  name: string
  email: string
  phone: string
  cpf: string
  birthDate: string
  address: string
  city: string
  state: string
  skills: string[]
  availability: string[]
  trainingStatus: "completo" | "em_andamento" | "pendente"
  trainingProgress: number
  documentsStatus: "aprovado" | "pendente" | "rejeitado"
  status: "ativo" | "inativo" | "pendente"
  registeredAt: string
  lastActivity: string
  shiftsCompleted: number
  hoursVolunteered: number
}

const volunteers: Volunteer[] = [
  {
    id: "1",
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(61) 99999-1111",
    cpf: "123.456.789-00",
    birthDate: "1990-05-15",
    address: "SQSW 303, Bloco A, Apt 202",
    city: "Brasília",
    state: "DF",
    skills: ["Canto", "Oração", "Leitura Bíblica"],
    availability: ["Sábado - Manhã", "Sábado - Tarde"],
    trainingStatus: "completo",
    trainingProgress: 100,
    documentsStatus: "aprovado",
    status: "ativo",
    registeredAt: "2024-01-15",
    lastActivity: "2024-06-15",
    shiftsCompleted: 24,
    hoursVolunteered: 48,
  },
  {
    id: "2",
    name: "João Santos",
    email: "joao.santos@email.com",
    phone: "(61) 99999-2222",
    cpf: "234.567.890-11",
    birthDate: "1985-08-22",
    address: "SHIS QI 15, Conjunto 8, Casa 12",
    city: "Brasília",
    state: "DF",
    skills: ["Visita", "Oração"],
    availability: ["Domingo - Manhã"],
    trainingStatus: "em_andamento",
    trainingProgress: 60,
    documentsStatus: "pendente",
    status: "ativo",
    registeredAt: "2024-03-10",
    lastActivity: "2024-06-10",
    shiftsCompleted: 8,
    hoursVolunteered: 16,
  },
  {
    id: "3",
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "(61) 99999-3333",
    cpf: "345.678.901-22",
    birthDate: "1995-12-03",
    address: "QNA 42, Lote 15, Casa 3",
    city: "Taguatinga",
    state: "DF",
    skills: ["Canto", "Instrumentos"],
    availability: ["Sábado - Manhã", "Domingo - Tarde"],
    trainingStatus: "completo",
    trainingProgress: 100,
    documentsStatus: "aprovado",
    status: "ativo",
    registeredAt: "2024-02-20",
    lastActivity: "2024-06-18",
    shiftsCompleted: 15,
    hoursVolunteered: 30,
  },
  {
    id: "4",
    name: "Pedro Lima",
    email: "pedro.lima@email.com",
    phone: "(61) 99999-4444",
    cpf: "456.789.012-33",
    birthDate: "1988-03-18",
    address: "Rua das Pitangueiras, Lote 8",
    city: "Águas Claras",
    state: "DF",
    skills: ["Visita", "Leitura Bíblica"],
    availability: ["Sábado - Tarde"],
    trainingStatus: "pendente",
    trainingProgress: 0,
    documentsStatus: "pendente",
    status: "pendente",
    registeredAt: "2024-06-01",
    lastActivity: "2024-06-01",
    shiftsCompleted: 0,
    hoursVolunteered: 0,
  },
  {
    id: "5",
    name: "Carla Oliveira",
    email: "carla.oliveira@email.com",
    phone: "(61) 99999-5555",
    cpf: "567.890.123-44",
    birthDate: "1992-07-25",
    address: "SGAS 915, Conjunto A",
    city: "Brasília",
    state: "DF",
    skills: ["Canto", "Oração", "Visita"],
    availability: ["Sábado - Manhã", "Sábado - Tarde", "Domingo - Manhã"],
    trainingStatus: "completo",
    trainingProgress: 100,
    documentsStatus: "aprovado",
    status: "inativo",
    registeredAt: "2023-08-10",
    lastActivity: "2024-02-15",
    shiftsCompleted: 45,
    hoursVolunteered: 90,
  },
]

export default function VoluntariosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>("todos")

  const filteredVolunteers = volunteers.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.cpf.includes(searchTerm)
    
    const matchesStatus =
      statusFilter === "todos" || v.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ativo":
        return <Badge className="bg-green-100 text-green-700">Ativo</Badge>
      case "inativo":
        return <Badge className="bg-gray-100 text-gray-600">Inativo</Badge>
      case "pendente":
        return <Badge className="bg-yellow-100 text-yellow-700">Pendente</Badge>
      default:
        return null
    }
  }

  const getTrainingBadge = (status: string) => {
    switch (status) {
      case "completo":
        return (
          <Badge className="bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completo
          </Badge>
        )
      case "em_andamento":
        return (
          <Badge className="bg-blue-100 text-blue-700">
            <Clock className="w-3 h-3 mr-1" />
            Em Andamento
          </Badge>
        )
      case "pendente":
        return (
          <Badge className="bg-yellow-100 text-yellow-700">
            <XCircle className="w-3 h-3 mr-1" />
            Pendente
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Voluntários</h1>
        <p className="text-gray-500">
          Consulte a ficha completa dos voluntários do seu polo
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {volunteers.filter((v) => v.status === "ativo").length}
                </p>
                <p className="text-sm text-gray-500">Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {volunteers.filter((v) => v.status === "pendente").length}
                </p>
                <p className="text-sm text-gray-500">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {volunteers.filter((v) => v.trainingStatus === "completo").length}
                </p>
                <p className="text-sm text-gray-500">Treinados</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {volunteers.filter((v) => v.status === "inativo").length}
                </p>
                <p className="text-sm text-gray-500">Inativos</p>
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
            placeholder="Buscar por nome, email ou CPF..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["todos", "ativo", "pendente", "inativo"].map((status) => (
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

      {/* Table */}
      <Card className="border-gray-200">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Voluntário</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Treinamento</TableHead>
                <TableHead>Horas</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVolunteers.map((volunteer) => (
                <TableRow key={volunteer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-medium">
                        {volunteer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{volunteer.name}</p>
                        <p className="text-sm text-gray-500">
                          {volunteer.skills.slice(0, 2).join(", ")}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-3 h-3" />
                        {volunteer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-3 h-3" />
                        {volunteer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {getTrainingBadge(volunteer.trainingStatus)}
                      <Progress
                        value={volunteer.trainingProgress}
                        className="h-1.5 w-20 mt-1"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <p className="font-medium text-lg">{volunteer.hoursVolunteered}h</p>
                      <p className="text-xs text-gray-500">
                        {volunteer.shiftsCompleted} plantões
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(volunteer.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedVolunteer(volunteer)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Ficha
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Volunteer Detail Modal */}
      <Dialog open={!!selectedVolunteer} onOpenChange={() => setSelectedVolunteer(null)}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Ficha do Voluntário</DialogTitle>
            <DialogDescription>
              Informações completas do voluntário
            </DialogDescription>
          </DialogHeader>
          
          {selectedVolunteer && (
            <Tabs defaultValue="dados" className="mt-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dados">Dados</TabsTrigger>
                <TabsTrigger value="competencias">Competências</TabsTrigger>
                <TabsTrigger value="treinamento">Treinamento</TabsTrigger>
                <TabsTrigger value="historico">Histórico</TabsTrigger>
              </TabsList>

              <TabsContent value="dados" className="space-y-4 mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-2xl font-medium">
                    {selectedVolunteer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{selectedVolunteer.name}</h3>
                    <p className="text-gray-500">CPF: {selectedVolunteer.cpf}</p>
                    {getStatusBadge(selectedVolunteer.status)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">E-mail</p>
                    <p className="font-medium">{selectedVolunteer.email}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p className="font-medium">{selectedVolunteer.phone}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Data de Nascimento</p>
                    <p className="font-medium">
                      {new Date(selectedVolunteer.birthDate).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Cadastrado em</p>
                    <p className="font-medium">
                      {new Date(selectedVolunteer.registeredAt).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Endereço</p>
                  <p className="font-medium">
                    {selectedVolunteer.address}, {selectedVolunteer.city} - {selectedVolunteer.state}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="competencias" className="space-y-4 mt-4">
                <div>
                  <h4 className="font-medium mb-2">Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedVolunteer.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Disponibilidade</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedVolunteer.availability.map((time) => (
                      <Badge key={time} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        <Calendar className="w-3 h-3 mr-1" />
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="treinamento" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Status do Treinamento</h4>
                    <div className="mt-1">
                      {getTrainingBadge(selectedVolunteer.trainingStatus)}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">
                      {selectedVolunteer.trainingProgress}%
                    </p>
                    <p className="text-sm text-gray-500">Concluído</p>
                  </div>
                </div>

                <Progress
                  value={selectedVolunteer.trainingProgress}
                  className="h-3"
                />

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <h4 className="font-medium">Status dos Documentos</h4>
                    <Badge
                      className={
                        selectedVolunteer.documentsStatus === "aprovado"
                          ? "bg-green-100 text-green-700 mt-1"
                          : selectedVolunteer.documentsStatus === "pendente"
                          ? "bg-yellow-100 text-yellow-700 mt-1"
                          : "bg-red-100 text-red-700 mt-1"
                      }
                    >
                      {selectedVolunteer.documentsStatus.charAt(0).toUpperCase() +
                        selectedVolunteer.documentsStatus.slice(1)}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    Ver Documentos
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="historico" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-gray-200">
                    <CardContent className="pt-4 text-center">
                      <p className="text-3xl font-bold text-green-600">
                        {selectedVolunteer.shiftsCompleted}
                      </p>
                      <p className="text-sm text-gray-500">Plantões Realizados</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="pt-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">
                        {selectedVolunteer.hoursVolunteered}h
                      </p>
                      <p className="text-sm text-gray-500">Horas Voluntariadas</p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Última Atividade</h4>
                  <p className="text-gray-600">
                    {new Date(selectedVolunteer.lastActivity).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Histórico Completo
                </Button>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
