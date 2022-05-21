<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $userLogged = Auth::user();

        $users = User::where('id', '<>', $userLogged->id)->get();

        return response()->json([
            'users' => $users
        ], Response::HTTP_OK);
    }

    public function show(User $user): JsonResponse
    {
        return response()->json([
            'user' => $user
        ], Response::HTTP_OK);
    }

    public function me(): JsonResponse
    {
        $userLogged = Auth::user();

        return response()->json([
            'user' => $userLogged
        ], Response::HTTP_OK);
    }
}
