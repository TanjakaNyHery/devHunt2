<?php

namespace App\Controller;

use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class RechercheQuestionController extends AbstractController
{
    #[Route('/recherche/question/{motcle}', name: 'app_recherche_question', methods: ['GET'])]
    public function index(QuestionRepository $questionRepository, string $motcle): JsonResponse
    {
        $search = $questionRepository->findQuestionByClef($motcle);
        $data = array();

        if($search) {
                array_push($data, array(
                     $search
                ));
        }

        return $this->json($data);
    }
}
