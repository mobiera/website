---
title: AI One: agentes de IA verificables para operadores
date: 2025-01-15
tags: [Telecomunicaciones, Confianza]
summary: Mobiera lanza AI One, agentes de IA de atención al cliente a los que los suscriptores acceden por SMS y Hologram, integrados con la facturación del operador e identificados con credenciales verificables.
---

<!-- exact day in January 2025 to confirm -->

Mobiera lanza AI One, una plataforma de agentes de IA de atención al cliente a
los que los suscriptores acceden desde cualquier teléfono.

Un agente de AI One responde por SMS a través del SMSC del operador, por lo que
funciona en cualquier teléfono sin aplicación y sin datos, y por un canal
privado DIDComm a través de Hologram Messaging. La verificación del número de
teléfono por PIN SMS vincula cada conversación al MSISDN del suscriptor.

El agente es un Servicio Verificable en la red Verana. Publica una credencial
de Servicio y la credencial de Organización del operador en su documento DID,
de modo que la billetera del suscriptor muestra quién lo opera antes del primer
mensaje. Un "agente de soporte" que lo imite no puede pasar esa verificación.

AI One es independiente del LLM, se conecta a los sistemas del operador
mediante MCP y se ejecuta en el Kubernetes del operador o alojado por Mobiera.
Las suscripciones y los cobros pasan por la integración con la facturación del
operador. Está construido sobre el framework de agentes de IA Hologram, de
2060.

Más información: [AI One](/telecom/ai-agents)

Mobiera
