import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body ?? {}

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const contact = await prisma.contact.create({
      data: {
        name: name ?? '',
        email: email ?? '',
        phone: phone ?? '',
        subject: subject ?? '',
        message: message ?? '',
        formType: 'contact',
        status: 'new'
      }
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente',
        contactId: contact?.id ?? ''
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error al guardar contacto:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
