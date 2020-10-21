<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'abbr' => 'required|string',
        'flag' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $languages = [];
        $filteredData = Language::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('abbr', 'LIKE', "%$search%")
                        ->orWhere('flag', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $language) {
            $languages[] = $language->toArray();
        }

        return [
            'languages' => $languages,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $languages = $data['languages'];
        $total = $data['total'];

        return response()->json([
            'languages' => $languages,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $language = Language::find($id);
        if (!$language) return response()->json([
            'message' => UtilController::message('Langue inexistante.', 'danger'),
        ]);

        return response()->json([
            'language' => $language,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $input = $request->all();

        $jsonString = file_get_contents(base_path('cms.json'));
        $cms = json_decode($jsonString, true);

        $cms['pages'][$request->abbr] = $cms['pages']['en'];

        $contentText = json_encode($cms);
        file_put_contents(base_path('cms.json'), $contentText);

        Language::create($input);

        return response()->json([
            'message' => UtilController::message('Langue créée avec succès.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $language = Language::find($id);
        if (!$language) return response()->json([
            'message' => UtilController::message('Langue inexistante.', 'danger'),
        ]);

        $request->validate($this->rules);

        $input = $request->all();

        $language->update($input);

        return response()->json([
            'message' => UtilController::message('Langue modifiée avec succès.', 'success'),
            'language' => $language,
        ]);
    }

    public function destroy($id)
    {
        $language = Language::find($id);
        if (!$language) return response()->json([
            'message' => UtilController::message('Langue inexistante.', 'danger'),
        ]);

        $language->delete();

        $data = $this->data();

        $languages = $data['languages'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message('Langue supprimée avec succès.', 'success'),
            'languages' => $languages,
            'total' => $total,
        ]);
    }
}
