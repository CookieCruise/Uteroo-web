// EJEMPLO DE ENDPOINT EN GO (Backend)
// Este es solo un ejemplo de cómo debería funcionar tu backend

package main

import (
    "encoding/json"
    "net/http"
    "time"
)

// Estructura de respuesta
type VerifyResponse struct {
    Success bool   `json:"success"`
    Message string `json:"message"`
}

// Endpoint para verificar el token
func VerifyEmailHandler(w http.ResponseWriter, r *http.Request) {
    // Obtener el token de la URL
    token := r.URL.Query().Get("token")
    
    if token == "" {
        respondJSON(w, VerifyResponse{
            Success: false,
            Message: "No se proporcionó un token válido",
        }, http.StatusBadRequest)
        return
    }
    
    // Buscar el token en la base de datos
    user, err := buscarUsuarioPorToken(token)
    if err != nil {
        respondJSON(w, VerifyResponse{
            Success: false,
            Message: "Token inválido o expirado",
        }, http.StatusNotFound)
        return
    }
    
    // Verificar si el token no ha expirado
    if time.Now().After(user.TokenExpiration) {
        respondJSON(w, VerifyResponse{
            Success: false,
            Message: "El enlace de verificación ha expirado",
        }, http.StatusGone)
        return
    }
    
    // Marcar el email como verificado
    err = marcarEmailVerificado(user.Email)
    if err != nil {
        respondJSON(w, VerifyResponse{
            Success: false,
            Message: "Error al verificar el email",
        }, http.StatusInternalServerError)
        return
    }
    
    // Invalidar el token (un solo uso)
    invalidarToken(token)
    
    // Respuesta exitosa
    respondJSON(w, VerifyResponse{
        Success: true,
        Message: "Email verificado exitosamente",
    }, http.StatusOK)
}

func respondJSON(w http.ResponseWriter, data VerifyResponse, status int) {
    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin", "*") // Permitir CORS
    w.WriteHeader(status)
    json.NewEncoder(w).Encode(data)
}

// Funciones de base de datos (implementa según tu DB)
func buscarUsuarioPorToken(token string) (*User, error) {
    // Implementa tu lógica de DB aquí
    return nil, nil
}

func marcarEmailVerificado(email string) error {
    // Implementa tu lógica de DB aquí
    return nil
}

func invalidarToken(token string) error {
    // Implementa tu lógica de DB aquí
    return nil
}

type User struct {
    Email           string
    TokenExpiration time.Time
}
